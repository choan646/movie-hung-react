import axiosClient from "./axiosClient";

const movieAPI = {
  getMovie: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachPhim");
  },
  getMovieByCategory: (category) => {
    const params = {
      maDanhMuc: category,
      maNhom: "GP01",
    };
    return axiosClient.get("QuanLyPhim/LayDanhSachPhim", { params });
  },
};
export default movieAPI;