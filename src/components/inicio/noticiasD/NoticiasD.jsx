import styles from "./noticias.module.css";
import data from "../../../../MOCK_DATA.json";
import { Link } from "react-router-dom";
function NoticiasD() {
  // Obtener las dos últimas noticias principales
  const ultimasNoticias = data.slice(-2);

  return (
    <div className={styles.container}>
      {ultimasNoticias.map((noticia, index) => (
        <div
          key={index}
          className={
            index % 2 === 0
              ? styles.card
              : `${styles.card} ${styles["card-reverse"]}`
          }
        >
          <img src={noticia.imageUrl} alt="cancha" />
          <div
            className={
              index % 2 === 0 ? styles["card-content"] : styles["cardreverse"]
            }
          >
            <h1>{noticia.title}</h1>
            <p>{noticia.subtitle}</p>
            <Link to={`noticias/${noticia.id}`} className={styles.LinkContainer}>
              <button>Ver Más</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoticiasD;
