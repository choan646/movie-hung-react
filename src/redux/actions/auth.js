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
  GET_INFO_USER_REQUEST,
  GET_INFO_USER_SUCCESS,
  GET_INFO_USER_FAILURE,
} from "../constants/auth";
import Swal from "sweetalert2";
import authAPI from "../services/authAPI";


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
//Thay vì dùng cách này, có thể sử dụng lại login(lấy cái values,taiKhoan + values.matKhau tạo thành obj đăng nhập)
//Nhưng thế thì phải bỏ cái Swal ra trang hàm handleLogin để đúng về mặt ui/ux
export function getInfoUser(values) {
  return async (dispatch) => {
    dispatch({ type: GET_INFO_USER_REQUEST });
    try {
      const { data } = await authAPI.getInfoUser(values);
      dispatch({ type: GET_INFO_USER_SUCCESS, payload:  data[0]  });
    } catch (error) {
      Swal.fire(error.response?.data);
      dispatch({
        type: GET_INFO_USER_FAILURE,
        payload: { error: error.response?.data },
      });
    }
  };
}
export function updateAtUser(values) {
  return async (dispatch) => {
    dispatch({ type: UPDATE_AT_USER_REQUEST });
    try {
      const { data } = await authAPI.updateAtUser(values);
      //Tạm thời chỉ thay đổi trên store chứ k xét xuống localStorage, vì như thế bị mất accessToken
      //Hoạt động bình thường (movie, cine, booking)
      // localStorage.setItem("userInfo", JSON.stringify(data));
      Swal.fire("Sửa Thành Công ! <br/> Đã thay đổi một số thông tin.. <br/> hãy Đăng Nhập lại!");
      dispatch({ type: UPDATE_AT_USER_SUCCESS, payload: { data } });
    } catch (error) {
      Swal.fire(error.response?.data);
      dispatch({
        type: UPDATE_AT_USER_FAILURE,
        payload: { error: error.response?.data },
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
      Swal.fire("Đăng Nhập Thành Công !");
      //JSON.stringify(data) chuyển obj thành chuỗi
      dispatch({ type: LOGIN_SUCCESS, payload: { data } });
    } catch (error) {
      Swal.fire(error.response?.data);
      dispatch({
        type: LOGIN_FAILURE,
        payload: { error: error.response?.data },
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
        payload: { error: error.response?.data },
      });
    }
  };
}
