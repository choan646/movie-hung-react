import {
    GET_CINEMA_REQUEST,
    GET_CINEMA_SUCCESS,
    GET_CINEMA_FAILURE,
} from "../constants/cinema";
import cinemasAPI from "../services/cinemas";

export const getCinemas = () => {
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