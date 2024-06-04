import { useState } from "react";
import stylo from "./navbar.module.css";
import { Link } from "react-scroll";
import logo from "../../imagenes/logo.png";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={stylo.container}>
      <a className={stylo.logo}>
        <img src={logo} alt="logo" />
      </a>
      <ul className={`${stylo.navlist} ${menuOpen ? stylo.open : ""}`}>
        <ul className={`${stylo.navlist} ${menuOpen ? stylo.open : ""}`}>
          <li>
            <Link
              to="hero"
              spy="true"
              smooth="true"
              offset={-70}
              duration={1000}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="equipos"
              spy="true"
              smooth="true"
              offset={-70}
              duration={1000}
            >
              Equipos
            </Link>
          </li>
          <li>
            <Link
              to="estadios"
              spy="true"
              smooth="true"
              offset={-70}
              duration={1000}
            >
              Canchas
            </Link>
          </li>
          <li>
            <Link
              to="partidos"
              spy="true"
              smooth="true"
              offset={-70}
              duration={1000}
            >
              Partidos
            </Link>
          </li>
          <li>
            <Link
              to="noticias"
              spy="true"
              smooth="true"
              offset={-70}
              duration={1000}
            >
              Noticias
            </Link>
          </li>
        </ul>
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
