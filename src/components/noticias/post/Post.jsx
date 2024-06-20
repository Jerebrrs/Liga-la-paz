import styles from "./post.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Post({ id, title, subtitle, categoria, imageUrl }) {
  return (
    <div className={styles.card}>
      <Link className={styles.LinkContainer} to={`${id}`}>
        <div className={styles.cardImageWrapper}>
          <img src={imageUrl} alt={title} className={styles.cardImage} />
          <div className={styles.categoria}>{categoria}</div>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.cardBody}>{subtitle}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
};

export default Post;
