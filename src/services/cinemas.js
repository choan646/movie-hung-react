import axiosClient from "./axiosClient";

const cinemasAPI = {
  getCinemas: () => {
    return axiosClient.get("QuanLyRap/LayThongTinHeThongRap");
  },
 
};
export default cinemasAPI;