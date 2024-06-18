import { useDispatch, useSelector } from "react-redux";
import styles from "./noticias.module.css";

import { Link } from "react-router-dom";
import { getPost } from "../../../redux/actions";
import { useEffect } from "react";
function NoticiasD() {
  const allPost = useSelector((state) => state.allPost);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {allPost.map((noticia, index) => (
        <div
          key={index}
          className={
            index % 2 === 0
              ? styles.card
              : `${styles.card} ${styles["card-reverse"]}`
          }
        >
          <img src={noticia.image} alt="cancha" />
          <div
            className={
              index % 2 === 0 ? styles["card-content"] : styles["cardreverse"]
            }
          >
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
    </div>
  );
}

export default NoticiasD;
