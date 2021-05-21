import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../constants/auth";
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "../constants/auth";

import authAPI from "../services/authAPI";


export function login(values) {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const { data } = await authAPI.login(values);

      //Lưu thông tin xuống localStorage để giữ trạng thái đăng nhập khi user tắt trang web hoặc refresh
      localStorage.setItem("userInfo", JSON.stringify(data));
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
