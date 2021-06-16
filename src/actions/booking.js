import {
  GET_BOOKING_REQUEST,
  GET_BOOKING_SUCCESS,
  GET_BOOKING_FAILURE,
} from "../constants/booking";
import bookingAPI from "../services/bookingAPI";

export function getChiTietPhongVe(maLichChieu) {
  return async (dispatch) => {
    dispatch({ type: GET_BOOKING_REQUEST });
    try {
        const {data} = await bookingAPI.getChiTietPhongVe(maLichChieu);
      dispatch({ type: GET_BOOKING_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_BOOKING_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
