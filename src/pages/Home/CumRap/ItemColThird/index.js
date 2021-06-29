import React from "react";
import { Link } from "react-router-dom";
export default function ItemColThird({ data }) {
  return (
    <div className="col-6">
      <h3 style={{ textAlign: "center", color: "#fa5238" }}>
        <i>* Gợi ý xuất chiếu *</i>
      </h3>
      {data?.map((item) => (
        <div className="item__data row" key={item.maHeThongRap}>
          {item?.lstCumRap?.map((itemListCumRap) => (
            <div
              className="item__listCumRap col-12"
              key={itemListCumRap.maCumRap}
            >
              {itemListCumRap?.danhSachPhim
                ?.slice(0, 1)
                .map((itemDanhSachPhim) => (
                  <div
                    className="item__danhSachPhim row"
                    key={itemDanhSachPhim.maPhim}
                  >
                    <div className="item__danhSachPhim__img col-4">
                      <img src={itemDanhSachPhim.hinhAnh} alt="hinhAnh" />
                    </div>
                    <div className="item__lichChieu col-8">
                      <p
                        style={{
                          textTransform: "uppercase",
                          textAlign: "center",
                        }}
                      >
                        {itemDanhSachPhim.tenPhim}
                      </p>
                      <div className="row d-flex">
                        {itemDanhSachPhim?.lstLichChieuTheoPhim
                          ?.slice(0, 4)
                          .map((itemLichChieu) => (
                            <div
                              className="container col-6"
                              key={itemLichChieu.maLichChieu}
                              style={{
                                paddingLeft: "20px",
                                paddingTop: "15px",
                                marginRight: "-25px",
                              }}
                            >
                              <button className="btn">
                                <Link
                                  to={`/checkout/${itemLichChieu.maLichChieu}`}
                                >
                                  <p>
                                    {itemLichChieu?.ngayChieuGioChieu.substring(
                                      11,
                                      13
                                    ) +
                                      "h" +
                                      itemLichChieu?.ngayChieuGioChieu.substring(
                                        14,
                                        16
                                      ) +
                                      "p"}
                                  </p>
                                  <p>
                                    {itemLichChieu?.ngayChieuGioChieu.substring(
                                      8,
                                      10
                                    ) +
                                      "/" +
                                      itemLichChieu?.ngayChieuGioChieu.substring(
                                        5,
                                        7
                                      ) +
                                      "/" +
                                      itemLichChieu?.ngayChieuGioChieu.substring(
                                        0,
                                        4
                                      )}
                                  </p>
                                </Link>
                              </button>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
