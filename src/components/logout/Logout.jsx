import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions";
import stylos from "./logout.module.css";
import logo from "../../imagenes/logo.png";

function Logout() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  console.log("Autenticado:", isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }))
      .then((response) => {
        if (response.success) {
          alert("Login successful!");
          navigate("/dashboard");
        } else {
          console.log(response);
          alert("Login failed: " + response.message);
        }
      })
      .catch((error) => {
        console.log(error.message);
        alert("An error occurred: " + error.message);
      });
  };

  return (
    <div className={stylos.container}>
      <div className={stylos.hero}>
        <h1>Bienvenido al login de Periodistas</h1>
        <h2>Siguenos en nuestras redes sociales.</h2>
        <p>Si quieres aportar al equipo de LPF contactanos!</p>
        <img src={logo} alt="logo" />
      </div>
      <div className={stylos.seccionform}>
        <form className={stylos.formcontrol} onSubmit={handleSubmit}>
          <p className={stylos.titlet}>Login de Author</p>
          <div className={stylos.inputfield}>
            <input
              className={stylos.inputt}
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className={stylos.labell}>Enter Email</label>
          </div>
          <div className={stylos.inputfield}>
            <input
              className={stylos.inputt}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className={stylos.labell}>Enter Password</label>
          </div>
          <div className={stylos.btn}>
            <button className={stylos.submitbtn} type="submit">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Logout;
