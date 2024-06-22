import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import logo from "../../imagenes/logo.png";
import instagram from "../../imagenes/instagram.png";
import facebook from "../../imagenes/facebook.png";
import whatsapp from "../../imagenes/whatsapp.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="logo" />
      </Link>

      <div className={`${styles.rightContent} ${menuOpen ? styles.hide : ""}`}>
        <a href="/login" className={styles.btnLogin}>
          Login
        </a>
      </div>

      <div
        className={`${styles.menuIcon} ${menuOpen ? styles.hide : ""}`}
        onClick={toggleMenu}
      >
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

      <ul className={`${styles.navlist} ${menuOpen ? styles.open : ""}`}>
        <li className={styles.logoCenter}>
          <img src={logo} alt="logo" />
        </li>
        <li className={styles.closeMenu} onClick={toggleMenu}>
          <button className={styles.closeButton}>X</button>
        </li>
        <li>
          <Link to="/" className={styles.navlink}>
            <button className={styles.btn}>Inicio</button>
          </Link>
        </li>
        <li>
          <Link to="/noticias" className={styles.navlink}>
            <button className={styles.btn}>Noticias</button>
          </Link>
        </li>
        <li className={styles.social}>
          <a href="https://www.facebook.com/profile.php?id=61561362082287">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://www.instagram.com/lapaz.futbol">
            <img src={instagram} alt="instagram" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+5493435330498&text=Hola, vengo de la web de LPF quisiera aportar informacion sobre un tema!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="whatsapp" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
