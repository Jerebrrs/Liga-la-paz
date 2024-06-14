import { useState } from "react";
import { createPost } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import stylos from "./createpost.module.css";

function CreatePost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  if (!user) {
    navigate("/login");
  }

  const [postData, setPostData] = useState({
    title: "",
    subtitle: "",
    description: "",
    image: null,
    userId: user ? user.id : "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setPostData({
        ...postData,
        image: files[0],
      });
    } else {
      setPostData({
        ...postData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", postData.title);
    formData.append("subtitle", postData.subtitle);
    formData.append("description", postData.description);
    formData.append("image", postData.image); // Agrega la imagen al FormData
    formData.append("userId", postData.userId);

    const result = await dispatch(createPost(formData));
    console.log("response", result);
    if (result.success) {
      alert("Post created successfully!");
      setPostData({
        title: "",
        subtitle: "",
        description: "",
        image: null,
        userId: user.id,
      });
      navigate("/noticias");
    } else {
      alert("Error creating post: " + result.message);
    }
  };

  return (
    <form className={stylos.container} onSubmit={handleSubmit}>
      <h1>Crea Tu noticia siguiendo los parametros minimos</h1>
      <div>
        <label>Title</label>
        <input type="text" name="title" onChange={handleChange} required />
      </div>
      <div>
        <label>Subtitle</label>
        <input type="text" name="subtitle" onChange={handleChange} required />
      </div>
      <div>
        <label>Description</label>
        <textarea name="description" onChange={handleChange} required />
      </div>
      <div>
        <label>Image URL</label>
        <input type="file" name="image" onChange={handleChange} required />
      </div>
      <h1>
        Antes de crear la noticia, chequear errores de ortografia y calidad de
        imagen.
      </h1>
      <button type="submit">Crear Noticia</button>
      <Link to={"/noticias"}>
        <button>Volver a Noticias</button>
      </Link>
    </form>
  );
}

export default CreatePost;
