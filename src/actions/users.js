import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USERBY_REQUEST,
  GET_USERBY_SUCCESS,
  GET_USERBY_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from "../constants/users";
import Swal from "sweetalert2";
import userAPI from "../services/userAPI";
import * as yup from "yup";


export const updateInfoAdminSchema = yup.object().shape({
  matKhau: yup
    .string()
    .required("Mật khẩu không được để trống")
    .min(3, "Mật khẩu phải từ 3 ký tự trở lên")
    .max(20, "Mật khẩu tối đa 20 ký tự"),
  email: yup
    .string()
    .required("Email không được để trống")
    .min(3, "Email phải từ 3 ký tự trở lên")
    .max(40, "Email tối đa 40 ký tự")
    .email("Email không đúng cú pháp"),
  soDt: yup
    .string()
    .matches(/^[0-9]+$/)
    .required("Số điện thoại không được để trống")
    .min(3, "Số điện thoại 3 ký tự trở lên")
    .max(20, "Số điện thoại tối đa 20 ký tự"),
  hoTen: yup
    .string()
    .required("Họ Tên không được để trống")
    .min(3, "Họ Tên phải từ 3 ký tự trở lên")
    .max(30, "Họ Tên tối đa 30 ký tự"),
});

export function getUser (currentPageId) {
  return async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    try {
      const { data } = await userAPI.getUserPagination(currentPageId);
      dispatch({ type: GET_USER_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_USER_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
};

export function getUserByTuKhoa(tuKhoa) {
  return async (dispatch) => {
    dispatch({ type: GET_USERBY_REQUEST });
    try {
      const { data } = await userAPI.getUserByTuKhoa(tuKhoa);
      dispatch({ type: GET_USERBY_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_USERBY_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
export function updateUser(values) {
  return async (dispatch) => {
    dispatch({ type: UPDATE_USER_REQUEST });
    try {
      const { data } = await userAPI.updateUser(values);
      localStorage.clear();
      // setItem("userInfo", JSON.stringify(data))
      Swal.fire("Chỉnh Sửa Thành Công!");
      dispatch({ type: UPDATE_USER_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
export function deleteUser(taiKhoan) {
  return async (dispatch) => {
    dispatch({ type: DELETE_USER_REQUEST });
    try {
      const { data } = await userAPI.deleteUser(taiKhoan);
      dispatch({ type: DELETE_USER_SUCCESS, payload: { data }});
    } catch (error) {
      dispatch({
        type: DELETE_USER_FAILURE,
        payload: { error: null },
      });
    }
  };
}
