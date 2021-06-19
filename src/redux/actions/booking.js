import {
  GET_BOOKING_REQUEST,
  GET_BOOKING_SUCCESS,
  GET_BOOKING_FAILURE,
  DAT_GHE_REQUEST,
  DAT_GHE_SUCCESS,
  DAT_GHE_FAILURE,
  DAT_VE_REQUEST,
  DAT_VE_SUCCESS,
  DAT_VE_FAILURE,
} from "../constants/booking";
import bookingAPI from "../services/bookingAPI";
import Swal from "sweetalert2";


export function getChiTietPhongVe(maLichChieu) {
  return async (dispatch) => {
    dispatch({ type: GET_BOOKING_REQUEST });
    try {
      const { data } = await bookingAPI.getChiTietPhongVe(maLichChieu);
      dispatch({ type: GET_BOOKING_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_BOOKING_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
export function datGhe(valueGhe) {
  return async (dispatch) => {
    dispatch({ type: DAT_GHE_REQUEST });
    try {
      dispatch({
        type: DAT_GHE_SUCCESS,
        payload: valueGhe,
      });
    } catch (error) {
      dispatch({
        type: DAT_GHE_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
export function datVe(maLichChieu,danhSachVe,taiKhoanNguoiDung) {
  return async (dispatch) => {
    dispatch({ type: DAT_VE_REQUEST });
    try {
      const { data } = await bookingAPI.datVe(maLichChieu,danhSachVe,taiKhoanNguoiDung);
      Swal.fire("Đặt Vé Thành Công!"); 

      dispatch({
        type: DAT_VE_SUCCESS,
        payload: {data},
      });
    } catch (error) {
      dispatch({
        type: DAT_VE_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
