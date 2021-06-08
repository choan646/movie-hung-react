import axiosClient from "./axiosClient";

const cinemasAPI = {
  getCinemas: () => {
    return axiosClient.get("/QuanLyRap/LayThongTinHeThongRap");
  },
  getCumRapByCinemas:(maHeThong)=> {
    const params = {
      maHeThongRap : maHeThong,
      maNhom: "GP11"
    }
    return axiosClient.get("/QuanLyRap/LayThongTinCumRapTheoHeThong",{params})
  }
};
export default cinemasAPI;
