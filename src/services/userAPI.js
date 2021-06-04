import axiosClient from "./axiosClient";

const userAPI = {
  getUser: () => {
    return axiosClient.get("QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP11");
  },
  getUserByTuKhoa: (tuKhoa) => {
    return axiosClient.get(
      `QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP11&tuKhoa=${tuKhoa}`
    );
  },
  updateUser: (values) => {
    return axiosClient.put(
      "QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      values
    );
  },
  deleteUser: (taiKhoan) => {
    return axiosClient.delete("QuanLyNguoiDung/XoaNguoiDung", taiKhoan)
  }
};
export default userAPI;
