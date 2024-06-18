import stylos from "./post.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Post({ id, title, subtitle,imageUrl }) {
  return (
    <div className={stylos.card}>
      <Link className={stylos.LinkContainer} to={`${id}`}> {/* Usa el id en el enlace */}
        <img src={imageUrl} alt={title} className={stylos.cardImage} />
        <h2 className={stylos.cardTitle}>{title}</h2>
        <p className={stylos.cardBody}>{subtitle}</p>
        {/* <p className={stylos.footer}>
          Escrito por <span className={stylos.byName}>{author}</span> el{" "}
          <span className={stylos.date}>{fecha}</span>
        </p> */}
      </Link>
    </div>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired, 
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Post;
