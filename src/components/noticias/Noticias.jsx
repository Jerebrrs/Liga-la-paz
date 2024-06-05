import stylos from "./noticias.module.css";
import data from "../../../MOCK_DATA.json";
import Post from "../noticias/post/Post";

function Noticias() {
  const firstFourPosts = data.slice(0, 8);

  return (
    <div className={stylos.container}>
      <h1>Noticias Destacadas De La Liga</h1>
      <div className={stylos.cards}>
        {firstFourPosts.map((info) => (
          console.log(info),
          <Post
            id={info.id}
            title={info.title}
            subtitle={info.subtitle}
            author={info.author}
            fecha={info.fecha}
            imageUrl={info.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Noticias;
