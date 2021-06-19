import axiosClient from "./axiosClient";

const bookingAPI = {
  getChiTietPhongVe: (maLichChieu) => {
    return axiosClient.get(
      `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  },
  datVe: (maLichChieu, danhSachVe, taiKhoanNguoiDung) => {
    const valuesBookingTicket = {
      maLichChieu: maLichChieu,
      danhSachVe: danhSachVe,
      taiKhoanNguoiDung: taiKhoanNguoiDung,
    };
    return axiosClient.post(
      "/QuanLyDatVe/DatVe",
      valuesBookingTicket
    );
  },
};
export default bookingAPI;
