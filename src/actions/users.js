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
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
} from "../constants/users";
import userAPI from "../services/userAPI";
import Swal from "sweetalert2";

export function getUser(currentPageId) {
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
}

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
      localStorage.setItem("userInfo", JSON.stringify(data));
      //
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
      dispatch({ type: DELETE_USER_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: DELETE_USER_FAILURE,
        payload: { error: null },
      });
    }
  };
}

export function addUser(values) {
  return async (dispatch) => {
    dispatch({ type: ADD_USER_REQUEST });
    try {
      const { data } = await userAPI.addUser(values);
      Swal.fire("Thêm Thành Công!");

      dispatch({ type: ADD_USER_SUCCESS, payload: { data } });
    } catch (error) {
      Swal.fire("Thêm Thất Bại!");
      dispatch({
        type: ADD_USER_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
