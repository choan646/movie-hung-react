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
  },
  updateAtUser: (values) => {
    return axiosClient.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", values);
  },
  getInfoUser:(values) => {
    return axiosClient.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP11&tuKhoa=${values}`)
  }
};
export default authAPI;

