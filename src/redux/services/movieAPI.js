import axiosClient from "./axiosClient";

const movieAPI = {
  getMovie: () => {
    return axiosClient.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP11");
  },
  getMoviePagination: (currentPage) => {
    return axiosClient.get(
      `/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP11&${currentPage}&soPhanTuTrenTrang=5`
    );
  },
  getMovieSearch: (tuKhoa) => {
    return axiosClient.get(
      `/QuanLyPhim/LayDanhSachPhim?maNhom=GP11&tenPhim=${tuKhoa}`
    );
  },
  addMovie: (values) => {
    return axiosClient.post("/QuanLyPhim/ThemPhimUploadHinh", values);
  },
  deleteMovie: (values) => {
    return axiosClient.delete(`QuanLyPhim/XoaPhim?MaPhim=${values}`);
  },
  updateMovie: (values) => {
    return axiosClient.post("/QuanLyPhim/CapNhatPhimUpload", values);
  },
};
export default movieAPI;
