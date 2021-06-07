import axiosClient from "./axiosClient";

const userAPI = {
  getUser: () => {
    return axiosClient.get("QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP11");
  },
  getUserPagination: (currentPageId) => {
    return axiosClient.get(
      `QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP11&${currentPageId}&soPhanTuTrenTrang=7`
    );
  },
  getUserByTuKhoa: (tuKhoa) => {
    return axiosClient.get(
      `QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP11&tuKhoa=${tuKhoa}`
    );
  },

  updateUser: (values) => {
    return axiosClient.put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", values);
  },
  deleteUser: (taiKhoan) => {
    return axiosClient.delete(
      `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  },
};
export default userAPI;
