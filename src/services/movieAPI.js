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

 
};
export default movieAPI;