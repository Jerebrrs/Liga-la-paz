import axios from "axios";
import {
  CREATE_POST_FAILURE,
  CREATE_POST_SUCCESS,
  GET_POST,
  GET_POST_ID,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from "./actions.type";

export function getPost() {
  return async function (disátch) {
    try {
      const response = await axios.get("/post");

      const posts = response.data.data.posts;

      const postDb = posts.map((post) => {
        return {
          ...post,
        };
      });

      disátch({
        type: GET_POST,
        payload: postDb,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const getPostId = (id) => async (dispatch) => {
  try {
    const infoPostId = await axios.get(`/post/${id}`);

    const post = infoPostId.data.data.post;
    dispatch({
      type: GET_POST_ID,
      payload: post,
    });
  } catch (error) {
    alert(error.message);
  }
};

export const login = (data) => async (dispatch) => {
  try {
    const response = await axios.post("/users/login", data);
    console.log("response", response);

    const { token, user } = response.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: user,
    });
    return { success: true };
  } catch (error) {


    console.log('error',error.response.data)
    const errorMessage =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : "A ocurrido un error,verifique sus credenciales.";

    dispatch({
      type: LOGIN_FAILURE,
      payload: errorMessage,
    });
    return { success: false, message: error.response.data.message };
  }
};

export const createPost = (postData) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post("/post", postData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: CREATE_POST_SUCCESS,
      payload: response.data,
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error occurred while creating Post:", error);
    dispatch({
      type: CREATE_POST_FAILURE,
      payload: error.response
        ? error.response.data.message
        : "Unexpected error occurred",
    });
    return {
      success: false,
      message: error.response
        ? error.response.data.message
        : "Unexpected error occurred",
    };
  }
};
