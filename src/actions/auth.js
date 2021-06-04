import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../constants/auth";
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "../constants/auth";
import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from "../constants/auth";
import Swal from 'sweetalert2'
import authAPI from "../services/authAPI";


export function login(values) {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const { data } = await authAPI.login(values);

      //Lưu thông tin xuống localStorage để giữ trạng thái đăng nhập khi user tắt trang web hoặc refresh
      localStorage.setItem("userInfo", JSON.stringify(data));
      Swal.fire("Đăng Nhập Thành Công!")
      //JSON.stringify(data) chuyển obj thành chuỗi

      dispatch({ type: LOGIN_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
export function register(values) {
  return async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      const { data } = await authAPI.register(values);

      //Lưu thông tin xuống localStorage để giữ trạng thái đăng nhập khi user tắt trang web hoặc refresh
      localStorage.setItem("userInfo", JSON.stringify(data));
      Swal.fire("Đăng Ký Thành Công!!")
      //JSON.stringify(data) chuyển obj thành chuỗi
      dispatch({ type: REGISTER_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: REGISTER_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
export function logout() {
  return (dispatch) => {
    dispatch({ type: LOGOUT_REQUEST });
    try {
    localStorage.clear();
      Swal.fire("Đăng Xuất Thành Công!!")
      dispatch({ type: LOGOUT_SUCCESS, payload: null });
    } catch (error) {
      dispatch({
        type: LOGOUT_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}