import {
  CREATE_POST_FAILURE,
  CREATE_POST_SUCCESS,
  GET_POST,
  GET_POST_ID,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from "./actions.type";

let initialState = {
  allPost: [],
  postDetails: {},
  isAuthenticated: false,
  user: null,
  error: null,
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: payload,
      };
    case GET_POST: {
      return {
        ...state,
        allPost: payload,
      };
    }
    case GET_POST_ID: {
      return {
        ...state,
        postDetails: payload,
      };
    }
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        allPost: [...state.allPost, payload],
        error: null,
      };
    case CREATE_POST_FAILURE:
      return {
        ...state,
        error: payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
