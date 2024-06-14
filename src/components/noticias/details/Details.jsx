import { useParams } from "react-router-dom";
import stylos from "./details.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPostId } from "../../../redux/actions";

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const postDetails = useSelector((state) => state.postDetails);

  useEffect(() => {
    dispatch(getPostId(id));
  }, [dispatch, id]);

  return (
    <div className={stylos.container}>
      <div className={stylos.hero}>
        <h1>{postDetails.title}</h1>
        <h2>{postDetails.subtitle}</h2>
        <p>{postDetails.description}</p>
      </div>
      <img src={postDetails.image} alt={postDetails.title} />
    </div>
  );
}

export default Details;
