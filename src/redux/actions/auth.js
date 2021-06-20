import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_HISTORY_REQUEST,
  GET_USER_HISTORY_SUCCESS,
  GET_USER_HISTORY_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  UPDATE_AT_USER_REQUEST,
  UPDATE_AT_USER_SUCCESS,
  UPDATE_AT_USER_FAILURE,
} from "../constants/auth";
import Swal from "sweetalert2";

import authAPI from "../services/authAPI";
import { Redirect } from "react-router-dom";

export function getUserInfoHistoryBooking(values) {
  return async (dispatch) => {
    dispatch({ type: GET_USER_HISTORY_REQUEST });
    try {
      const { data } = await authAPI.getUserInfoHistoryBooking(values);
      dispatch({ type: GET_USER_HISTORY_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_USER_HISTORY_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
export function updateAtUser(values) {
  return async (dispatch) => {
    dispatch({ type: UPDATE_AT_USER_REQUEST });
    try {
      const { data } = await authAPI.updateAtUser(values);
      localStorage.clear();
      Swal.fire("Sửa Thành Công!<br> Yêu Cầu Đăng Nhập Lại!");
      dispatch({ type: UPDATE_AT_USER_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: UPDATE_AT_USER_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
export function login(values) {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const { data } = await authAPI.login(values);

      //Lưu thông tin xuống localStorage để giữ trạng thái đăng nhập khi user tắt trang web hoặc refresh
      localStorage.setItem("userInfo", JSON.stringify(data));
      Swal.fire("Đăng Nhập Thành Công!");
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
      Swal.fire("Đăng Ký Thành Công!!");
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
      Swal.fire("Đăng Xuất Thành Công!!");
      dispatch({ type: LOGOUT_SUCCESS, payload: null });
    } catch (error) {
      dispatch({
        type: LOGOUT_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
