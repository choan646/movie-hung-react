import axiosClient from "./axiosClient";

const userAPI = {
  getUser: () => {
    return axiosClient.get("/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP11");
  },
  getUserPagination: (currentPage,tukhoa) => {
    return axiosClient.get(
      `/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang?MaNhom=GP11&${tukhoa}&${currentPage}&soPhanTuTrenTrang=7`
    );
  },
  getUserByTuKhoa: (tuKhoa) => {
    return axiosClient.get(
      `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP11&tuKhoa=${tuKhoa}`
    );
  },
  deleteUser: (taiKhoan) => {
    return axiosClient.delete(
      `/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  },
  addUser:(values) => {
    return axiosClient.post("/QuanLyNguoiDung/ThemNguoiDung", values)
  },
  updateUser:(values) => {
    return axiosClient.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", values)
  }
};
export default userAPI;
