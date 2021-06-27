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
  UPDATE_MOVIE_REQUEST,
  UPDATE_MOVIE_SUCCESS,
  UPDATE_MOVIE_FAILURE,
} from "../constants/movie";
import moviesAPI from "../services/movieAPI";
import Swal from "sweetalert2";

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
export function getMovieSearch(tuKhoa) {
  return async (dispatch) => {
    dispatch({ type: GET_MOVIE_SEARCH_REQUEST });
    try {
      const { data } = await moviesAPI.getMovieSearch(tuKhoa);
      dispatch({ type: GET_MOVIE_SEARCH_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_MOVIE_SEARCH_FAILURE,
        payload: { error: error.response?.data },
      });
    }
  };
}
export function addMovie(values, currentPage) {
  return async (dispatch) => {
    dispatch({ type: ADD_MOVIE_REQUEST });
    try {
      const { data } = await moviesAPI.addMovie(values);
      Swal.fire("Thêm Thành Công!");
      dispatch({ type: ADD_MOVIE_SUCCESS, payload: { data } });
      dispatch(getMoviePagination(currentPage));
    } catch (error) {
      Swal.fire(error.response?.data);
      dispatch({
        type: ADD_MOVIE_FAILURE,
        payload: { error: error.response?.data },
      });
    }
  };
}
export function deleteMovie(values) {
  return async (dispatch) => {
    dispatch({ type: DELETE_MOVIE_REQUEST });
    try {
      const { data } = await moviesAPI.deleteMovie(values);
      if (data === "Xóa thành công") {
        dispatch({ type: DELETE_MOVIE_SUCCESS, payload: values });
      }
    } catch (error) {
      Swal.fire(error.response?.data);
      dispatch({
        type: DELETE_MOVIE_FAILURE,
        payload: { error: error.response },
      });
    }
  };
}
export function setMovieSelected(values) {
  return (dispatch) => {
    dispatch({ type: "SET_MOVIE_SELECTED", payload: values });
  };
}

export function updateMovie(values, currentPage) {
  return async (dispatch) => {
    dispatch({ type: UPDATE_MOVIE_REQUEST });
    try {
      const { data } = await moviesAPI.updateMovie(values);
      Swal.fire("Sửa Thành Công!");
      dispatch({ type: UPDATE_MOVIE_SUCCESS, payload: { data } });
      dispatch(getMoviePagination(currentPage));
    } catch (error) {
      Swal.fire(error.response?.data);
      dispatch({
        type: UPDATE_MOVIE_FAILURE,
        payload: { error: error.response?.data },
      });
    }
  };
}
