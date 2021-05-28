import axiosClient from "./axiosClient";

const movieAPI = {
  getMovie: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP11");
  },
 
};
export default movieAPI;