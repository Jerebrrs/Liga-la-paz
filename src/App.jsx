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
import { LOGIN_SUCCESS } from "./redux/actions.type";

axios.defaults.baseURL = "http://localhost:3000";

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
      // Despachar la acción solo si el usuario está presente
      dispatch({
        type: LOGIN_SUCCESS,
        payload: userObject,
      });
    }
  }, [dispatch]);

  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    // Si no hay token, elimina el encabezado de autorización de Axios
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
