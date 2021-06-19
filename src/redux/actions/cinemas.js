import {
  GET_CINEMA_REQUEST,
  GET_CINEMA_SUCCESS,
  GET_CINEMA_FAILURE,
  GET_CUMRAPBY_CINEMAS_REQUEST,
  GET_CUMRAPBY_CINEMAS_SUCCESS,
  GET_CUMRAPBY_CINEMAS_FAILURE,
  GET_SHOWTIMESBY_CINEMAS_REQUEST,
  GET_SHOWTIMESBY_CINEMAS_SUCCESS,
  GET_SHOWTIMESBY_CINEMAS_FAILURE,
  GET_SHOWTIMESBY_MOVIE_REQUEST,
  GET_SHOWTIMESBY_MOVIE_SUCCESS,
  GET_SHOWTIMESBY_MOVIE_FAILURE,
} from "../constants/cinema";
import cinemasAPI from "../services/cinemas";

export function getCinemas() {
  return async (dispatch) => {
    dispatch({ type: GET_CINEMA_REQUEST });
    try {
      const { data } = await cinemasAPI.getCinemas();
      dispatch({ type: GET_CINEMA_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_CINEMA_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
export function getCumRapByCinemas(maHeThongRap) {
  return async (dispatch) => {
    dispatch({ type: GET_CUMRAPBY_CINEMAS_REQUEST });
    try {
      const { data } = await cinemasAPI.getCumRapByCinemas(maHeThongRap);
      dispatch({ type: GET_CUMRAPBY_CINEMAS_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_CUMRAPBY_CINEMAS_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
export function getShowTimesByCinemas(maHeThongRap) {
  return async (dispatch) => {
    dispatch({ type: GET_SHOWTIMESBY_CINEMAS_REQUEST });
    try {
      const { data } = await cinemasAPI.getShowTimesByCinemas(maHeThongRap);
      dispatch({ type: GET_SHOWTIMESBY_CINEMAS_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_SHOWTIMESBY_CINEMAS_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}

export function getShowTimesByIdMovie(maPhim) {
  return async (dispatch) => {
    dispatch({ type: GET_SHOWTIMESBY_MOVIE_REQUEST });
    try {
      const { data } = await cinemasAPI.getShowTimesByIdMovie(maPhim);
      dispatch({ type: GET_SHOWTIMESBY_MOVIE_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_SHOWTIMESBY_MOVIE_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
