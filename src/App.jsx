import "./App.css";
import Inicio from "./components/inicio/Inicio";
import Noticias from "./components/noticias/Noticias";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./components/noticias/details/Details";
import axios from "axios";
import Logout from "./components/logout/Logout";
import PublicLayout from "./PublicLayaout";
import PrivateLayout from "./PrivateLayout";
import Home from "./components/dashboard/home/Home";
import CreatePost from "./components/dashboard/createPost/CreatePost";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./redux/actions.type";
import { jwtDecode } from "jwt-decode";

const apiBack = "https://backend-lpf.onrender.com"
axios.defaults.baseURL = apiBack;
console.log("API Backend URL:", apiBack);
const token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userString = localStorage.getItem("user");

    if (token && userString) {
      const userObject = JSON.parse(userString);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: userObject,
      });

      const decodedToken = jwtDecode(token);
      const expirationTime = decodedToken.exp * 1000 - 60000; // 1 minuto antes de la expiración

      const checkTokenExpiration = setInterval(() => {
        if (Date.now() >= expirationTime) {
          clearInterval(checkTokenExpiration);
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          delete axios.defaults.headers.common["Authorization"];
          dispatch({ type: LOGIN_FAILURE });
          window.location.href = "/login";
        }
      }, 1000);

      return () => clearInterval(checkTokenExpiration);
    }
  }, [dispatch]);

  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PublicLayout>
              <Inicio />
            </PublicLayout>
          }
        />
        <Route
          path="/noticias"
          element={
            <PublicLayout>
              <Noticias />
            </PublicLayout>
          }
        />
        <Route
          path="/noticias/:id"
          element={
            <PublicLayout>
              <Details />
            </PublicLayout>
          }
        />
        <Route
          path="/login"
          element={
            <PublicLayout>
              <Logout />
            </PublicLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateLayout>
              <Home />
            </PrivateLayout>
          }
        />
        <Route
          path="/dashboard/create"
          element={
            <PrivateLayout>
              <CreatePost />
            </PrivateLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
