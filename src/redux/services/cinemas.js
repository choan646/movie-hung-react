import axiosClient from "./axiosClient";

const cinemasAPI = {
  getCinemas: () => {
    return axiosClient.get("/QuanLyRap/LayThongTinHeThongRap");
  },
  getCumRapByCinemas:(maHeThongRap)=> {
    return axiosClient.get(`/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}&maNhom=GP11`)
  },
  getShowTimesByCinemas:(maHeThongRap)=>{
    return axiosClient.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP11`)
  
  },
  getShowTimesByIdMovie: (maPhim) => {
    return axiosClient.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}
    `)
  },

  }
export default cinemasAPI;
