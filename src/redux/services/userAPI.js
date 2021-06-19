import axiosClient from "./axiosClient";

const userAPI = {
  getUser: () => {
    return axiosClient.get("/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP11");
  },
  getUserPagination: (currentPage) => {
    return axiosClient.get(
      `/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP11&${currentPage}&soPhanTuTrenTrang=7`
    );
  },
  getUserByTuKhoa: (tuKhoa) => {
    return axiosClient.get(
      `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP11&tuKhoa=${tuKhoa}`
    );
  },

  updateAtUser: (values) => {
    return axiosClient.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", values);
  },
  deleteUser: (taiKhoan) => {
    return axiosClient.delete(
      `/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  },
  addUser:(values) => {
    return axiosClient.post("/QuanLyNguoiDung/ThemNguoiDung", values)
  }
};
export default userAPI;
