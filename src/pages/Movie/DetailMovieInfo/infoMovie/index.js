import React from "react";

export default function InfoMovie({ data }) {
  return (
    <div className="tab__ThongTinPhim row">
      <div className="col-6 pl-5 mt-2">
        <p>
          <b>Ngày Công Chiếu : </b>
          {data.ngayKhoiChieu.substring(8, 10) +
            "/" +
            data.ngayKhoiChieu.substring(5, 7) +
            "/" +
            data.ngayKhoiChieu.substring(0, 4)}
        </p>
        <p>
          <b>Thời Gian Bắt Đầu Khởi Chiếu : </b>{" "}
          {data.ngayKhoiChieu.substring(11, 19)}
        </p>
        <p>
          <b>Định Dạng : </b> 2D/Digital
        </p>
        <p>
          <b>Đánh Giá : </b> {data.danhGia} điểm
        </p>
      </div>
      <div className="col-6">
        <h4>Nội dung</h4>
        <p>{data.moTa}</p>
      </div>
    </div>
  );
}
