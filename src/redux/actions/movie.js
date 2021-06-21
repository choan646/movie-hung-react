import {
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE,
  GET_MOVIE_PAG_REQUEST,
  GET_MOVIE_PAG_SUCCESS,
  GET_MOVIE_PAG_FAILURE,
  GET_MOVIE_SEARCH_REQUEST,
  GET_MOVIE_SEARCH_SUCCESS,
  GET_MOVIE_SEARCH_FAILURE
} from "../constants/movie";
import moviesAPI from "../services/movieAPI";

export function getMovie() {
  return async (dispatch) => {
    dispatch({ type: GET_MOVIE_REQUEST });
    try {
      const { data } = await moviesAPI.getMovie();
      dispatch({ type: GET_MOVIE_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_MOVIE_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
export function getMoviePagination(currentPage) {
  return async (dispatch) => {
    dispatch({ type: GET_MOVIE_PAG_REQUEST });
    try {
      const { data } = await moviesAPI.getMoviePagination(currentPage);
      dispatch({ type: GET_MOVIE_PAG_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_MOVIE_PAG_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
export function getMovieSearch(tuKhoa){
  return async (dispatch) => {
    dispatch({ type: GET_MOVIE_SEARCH_REQUEST });
    try {
      const { data } = await moviesAPI.getMovieSearch(tuKhoa);
      dispatch({ type: GET_MOVIE_SEARCH_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_MOVIE_SEARCH_FAILURE,
        payload: { error: error.response.data },
      });
    }
  }
}
