
import stylos from "./footer.module.css";

function Footer() {
  return (
    <div className={stylos.container}>
      <h1>Liga Paceña 2024</h1>
      <div className={stylos.seccion}>
        <a href="#">Equipos</a>
        <a href="#">Estadios</a>
        <a href="#">Noticias</a>
        <a href="#">Autor</a>
        <a href="#">Contacto</a>
      </div>
      <div className={stylos.social}>
        <a href="#">
          <img src="https://i.pinimg.com/736x/8f/94/c6/8f94c616ec0a60bafb4de4e0260719da.jpg" alt="social" />
        </a>
        <a href="#">
          <img src="https://i.pinimg.com/736x/8f/94/c6/8f94c616ec0a60bafb4de4e0260719da.jpg" alt="social" />
        </a>
        <a href="#">
          <img src="https://i.pinimg.com/736x/8f/94/c6/8f94c616ec0a60bafb4de4e0260719da.jpg" alt="social" />
        </a>
        <a href="#">
          <img src="https://i.pinimg.com/736x/8f/94/c6/8f94c616ec0a60bafb4de4e0260719da.jpg" alt="social" />
        </a>
      </div>
      <h2 className={stylos.c}>KJB-©</h2>
    </div>
  );
}

export default Footer;
