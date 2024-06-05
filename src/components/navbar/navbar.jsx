import  { useState } from "react";
import stylo from "./navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../imagenes/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={stylo.container}>
      <Link to="/" className={stylo.logo}>
        <img src={logo} alt="logo" />
      </Link>
      <ul className={`${stylo.navlist} ${menuOpen ? stylo.open : ""}`}>
        <li>
          <Link to="/" className={stylo.navlink}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/noticias" className={stylo.navlink}>
            Noticias
          </Link>
        </li>
        {/* Otros enlaces de tu Navbar */}
      </ul>

      <div className={stylo.rigchcontent}>
        <a className={stylo.btnlogin}>Login</a>
        <div className={stylo.bxmenu} id="menu-icon" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            fill="#fff"
            y="0px"
            width="30"
            height="50"
            viewBox="0 0 50 50"
          >
            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
