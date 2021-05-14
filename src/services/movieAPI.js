import axiosClient from "./axiosClient";

const movieAPI = {
  getMovie: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP03");
  },
 
};
export default movieAPI;