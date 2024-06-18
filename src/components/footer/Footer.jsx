import stylos from "./footer.module.css";
import logo from "../../imagenes/logo.png";
import instagram from "../../imagenes/instagram.png";
import facebook from "../../imagenes/facebook.png";
import whatsapp from "../../imagenes/whatsapp.png";

function Footer() {
  return (
    <div className={stylos.container}>
      <div>
        <h1>Liga Paceña de Futbo 2024</h1>
        <div className={stylos.social}>
          <a href="#">
            <img
              src={facebook}
              alt="social"
            />
          </a>
          <a href="https://www.instagram.com/lapaz.futbol">
            <img
              src={instagram}
              alt="social"
            />
          </a>
          <a href="https://api.whatsapp.com/send?phone=+5493435330498&text=Hola, vengo de la web de LPF quisiera aportar informacion sobre un tema!" target={"_blank"}>
            <img
              src={whatsapp}
              alt="social"
            />
          </a>
        </div>
      </div>
      <div className={stylos.logo}>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className={stylos.seccion}>
        <a href="/">Inicio</a>
        <a href="/noticias">Noticias</a>
        <a href="/login">Author</a>
      </div>
    </div>
  );
}

export default Footer;
