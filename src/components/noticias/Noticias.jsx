import stylos from "./noticias.module.css";
import Post from "../noticias/post/Post";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPost } from "../../redux/actions";

function Noticias() {
  const allPost = useSelector((state) => state.allPost);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  return (
    <div className={stylos.container}>
      <h1>Noticias Destacadas</h1>
      <div className={stylos.cards}>
        {allPost.slice(0, 8).map((info) => (
          <Post
            key={info.id}
            id={info.id}
            title={info.title}
            subtitle={info.subtitle}
            imageUrl={info.image}
            categoria={info.categoria}
            fecha={info.createdAt}
          />
        ))}
      </div>
    </div>
  );
}

export default Noticias;
