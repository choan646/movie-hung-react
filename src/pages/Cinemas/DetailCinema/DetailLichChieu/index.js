import React from "react";
import { Link } from "react-router-dom";

export default function DetailLichChieu({ data }) {
  return (
    <>
      {data?.danhSachPhim?.map((dsp) => (
        <div key={dsp.maPhim} className="row lichChieuAtCinema__content">
          <div className="col-2 lichChieuAtCinema__img">
            <img width="100%" height="200px" src={dsp.hinhAnh} alt="hinhAnh" />
          </div>
          <div className="col-9 lichChieuAtCinema__detail">
            <h5 style={{ color: "#fff", marginBottom: "25px" }}>
              <b>
                <i>{dsp.tenPhim}</i>
              </b>
            </h5>
            <div className="row">
              {dsp?.lstLichChieuTheoPhim?.map((lstLichChieu) => (
                <div className="col" key={lstLichChieu.maLichChieu}>
                  <button className="btn">
                    <Link to={`/checkout/${lstLichChieu.maLichChieu}`}>
                      <p>
                        {lstLichChieu?.ngayChieuGioChieu.substring(11, 13) +
                          "h" +
                          lstLichChieu?.ngayChieuGioChieu.substring(14, 16) +
                          "p"}
                      </p>
                      <p>
                        {lstLichChieu?.ngayChieuGioChieu.substring(8, 10) +
                          "/" +
                          lstLichChieu?.ngayChieuGioChieu.substring(5, 7) +
                          "/" +
                          lstLichChieu?.ngayChieuGioChieu.substring(0, 4)}
                      </p>
                    </Link>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
