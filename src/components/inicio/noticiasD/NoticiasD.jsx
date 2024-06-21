import { useDispatch, useSelector } from "react-redux";
import styles from "./noticias.module.css";

import { Link } from "react-router-dom";
import { getPost } from "../../../redux/actions";
import { useEffect } from "react";
function NoticiasD() {
  const allPost = useSelector((state) => state.allPost.slice(0, 2));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {allPost.map((noticia, index) => (
        <div
          key={index}
          // className={
          //   index % 2 === 0
          //     ? styles.card
          //     : `${styles.card} ${styles["card-reverse"]}`
          // }
          className={styles.card}
        >
          <img src={noticia.image} alt="cancha" />
          <div className={styles["card-content"]}>
            <h1>{noticia.title}</h1>
            <p>{noticia.subtitle}</p>
            <Link
              to={`noticias/${noticia.id}`}
              className={styles.LinkContainer}
            >
              <button className={styles.btn}>Ver Más</button>
            </Link>
          </div>
        </div>
      ))}
      <Link className={styles.LinkContainer} to={"/noticias"}>
        <h1 className={styles.btn}>Todas las Noticias</h1>
      </Link>
    </div>
  );
}

export default NoticiasD;
