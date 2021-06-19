import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USERBY_REQUEST,
  GET_USERBY_SUCCESS,
  GET_USERBY_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
} from "../constants/users";
const initialState = {
  user: [],
  isLoading: false,
  error: null,
};
function userReducer(state = initialState, action) {
  switch (action.type) {
    //GET_USER
    case GET_USER_REQUEST:
      return { ...state, isLoading: true, error: null };

    case GET_USER_SUCCESS:
      return { ...state, user: action.payload.data, isLoading: false };
    case GET_USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

    //GET_USERBY
    case GET_USERBY_REQUEST:
      return { ...state, isLoading: true, error: null };

    case GET_USERBY_SUCCESS:
      return { ...state, user: action.payload.data, isLoading: false };
    case GET_USERBY_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

    //UPDATE_USER
    case UPDATE_USER_REQUEST:
      return { ...state, isLoading: true, error: null };

    case UPDATE_USER_SUCCESS:
      return { ...state, user: action.payload.data, isLoading: false };
    case UPDATE_USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

    //DELETE_USER_
    case DELETE_USER_REQUEST:
      return { ...state, isLoading: true, error: null };
    case DELETE_USER_SUCCESS:
      return { ...state, user: action.payload.data, isLoading: false };
    case DELETE_USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

    //ADD_USER
    case ADD_USER_REQUEST:
      return { ...state, isLoading: true, error: null };

    case ADD_USER_SUCCESS:
      return { ...state, user: action.payload.data, isLoading: false };
    case ADD_USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    default:
      return state;
  }

}
export default userReducer;
