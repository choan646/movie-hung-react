import axiosClient from "./axiosClient";

const bookingAPI = {
  getChiTietPhongVe: (maLichChieu) => {
    return axiosClient.get(
      `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  },
};
export default bookingAPI;
