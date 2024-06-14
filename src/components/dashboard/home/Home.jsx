import { Link } from "react-router-dom";
import stylos from "./home.module.css";

function Home() {
  return (
    <div className={stylos.hero}>
      <div className={stylos.container}>
        <h1>Seccion en Construccion</h1>
        <p>
          Si sos Author, por favor crea una noticia. Tene en cuenta las
          caracteristicas minimas de una Noticia.
        </p>
        <Link to={"/dashboard/create"}>
          <button>Crear Noticia</button>
        </Link>
        <Link to={"/"}>
          <button>Volver a Web</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
