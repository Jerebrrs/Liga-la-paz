import stylos from "./footer.module.css";
import logo from "../../imagenes/logo.png";

function Footer() {
  return (
    <div className={stylos.container}>
      <div>
        <h1>Liga Paceña de Futbo 2024</h1>
        <div className={stylos.social}>
          <a href="#">
            <img
              src="https://cdn.icon-icons.com/icons2/1211/PNG/512/1491580635-yumminkysocialmedia26_83102.png"
              alt="social"
            />
          </a>
          <a href="#">
            <img
              src="https://cdn.icon-icons.com/icons2/1195/PNG/512/1490889652-facebook_82510.png"
              alt="social"
            />
          </a>
          <a href="https://api.whatsapp.com/send?phone=+5493435330498&text=Hola, vengo de la web de LPF quisiera aportar informacion sobre un tema!" target={"_blank"}>
            <img
              src="https://cdn.icon-icons.com/icons2/2429/PNG/512/whatsapp_logo_icon_147205.png"
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
