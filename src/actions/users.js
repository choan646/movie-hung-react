import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from "../constants/users";
import Swal from "sweetalert2";
import userAPI from "../services/userAPI";
import axios from "axios";

export const getUser = () => {
  return async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    try {
      const { data } = await userAPI.getUser();
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
    dispatch({ type: GET_USER_REQUEST });
    try {
      const { data } = await userAPI.getUserByTuKhoa(tuKhoa);

      dispatch({ type: GET_USER_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_USER_FAILURE,
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
      localStorage.setItem("userInfo", JSON.stringify(data));
      Swal.fire("Chỉnh Sửa Thành Công!");
      dispatch({ type: UPDATE_USER_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_FAILURE,
        payload: { error: error.response },
      });
    }
  };
}
export function deleteUser(taiKhoan) {
  return async (dispatch) => {
    dispatch({ type: DELETE_USER_REQUEST });
    try {
      const { data } = await userAPI.deleteUser(taiKhoan);
      dispatch({ type: DELETE_USER_SUCCESS});
    } catch (error) {
      dispatch({
        type: DELETE_USER_FAILURE,
        payload: { error: error.response },
      });
    }
  };
}
