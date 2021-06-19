import axiosClient from "./axiosClient";

const authAPI = {
  login: (values) => {
    return axiosClient.post("/QuanLyNguoiDung/DangNhap", values);
  },
  register: (values) => {
    return axiosClient.post("/QuanLyNguoiDung/DangKy", values);
  },
  getUserInfoHistoryBooking: (values) => {
    return axiosClient.post("/QuanLyNguoiDung/ThongTinTaiKhoan", values)
  }
};
export default authAPI;

