//Courses reducer
import {
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE,
  GET_MOVIE_PAG_REQUEST,
  GET_MOVIE_PAG_SUCCESS,
  GET_MOVIE_PAG_FAILURE,
  GET_MOVIE_SEARCH_REQUEST,
  GET_MOVIE_SEARCH_SUCCESS,
  GET_MOVIE_SEARCH_FAILURE,
  ADD_MOVIE_FAILURE,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_REQUEST,
  DELETE_MOVIE_REQUEST,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAILURE,
} from "../constants/movie";

const initialState = {
  data: [],
  dataSearch: null,
  dataPaginate: [],
  isLoading: false,
  error: null,
};
function movieReducer(state = initialState, action) {
  switch (action.type) {
    //Normal:
    case GET_MOVIE_REQUEST:
      return { ...state, isLoading: true, error: null };

    case GET_MOVIE_SUCCESS:
      return { ...state, data: action.payload.data, isLoading: false };

    case GET_MOVIE_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

    //Pagination:
    case GET_MOVIE_PAG_REQUEST:
      return { ...state, isLoading: true, error: null };

    case GET_MOVIE_PAG_SUCCESS:
      return { ...state, dataPaginate: action.payload.data, isLoading: false };

    case GET_MOVIE_PAG_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

    //Search
    case GET_MOVIE_SEARCH_REQUEST:
      return { ...state, isLoading: true, error: null };

    case GET_MOVIE_SEARCH_SUCCESS:
      return { ...state, dataSearch: action.payload.data, isLoading: false };

    case GET_MOVIE_SEARCH_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

    //Add
    case ADD_MOVIE_REQUEST:
      return { ...state, isLoading: true, error: null };

    case ADD_MOVIE_SUCCESS:
      return { ...state, dataPaginate: action.payload.data, isLoading: false };

    case ADD_MOVIE_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    case ADD_MOVIE_SUCCESS:

    //Delete
    case DELETE_MOVIE_REQUEST:
      return { ...state, isLoading: true, error: null };

    case DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        dataPaginate: state.dataPaginate.filter(
          (movieDel) => movieDel.maPhim !== action.payload
        ),
        isLoading: false,
      };

    case DELETE_MOVIE_FAILURE:
      return { ...state, isLoading: false };

    default:
      return state;
  }
}

export default movieReducer;
