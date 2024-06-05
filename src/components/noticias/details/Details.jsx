import { useParams } from "react-router-dom"; // Importa useParams para obtener el id de la URL
import stylos from "./details.module.css";
import data from "../../../../MOCK_DATA.json";

function Details() {
  const { id } = useParams(); // Obtiene el id de la URL

  // Busca la noticia correspondiente en el array data
  const selectedPost = data.find((post) => post.id === parseInt(id));

  // Si no se encuentra la noticia, puedes mostrar un mensaje de error o redirigir a una página de 404
  if (!selectedPost) {
    return <div>No se encontró la noticia</div>;
  }

  return (
    <div className={stylos.container}>
      <div className={stylos.hero}>
        <h1>{selectedPost.title}</h1>
        <h2>{selectedPost.subtitle}</h2>
        <p>{selectedPost.description}</p>
      </div>
      <img src={selectedPost.imageUrl} alt={selectedPost.title} />
    </div>
  );
}

export default Details;
