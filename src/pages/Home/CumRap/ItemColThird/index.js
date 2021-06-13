import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

export default function ItemColThird({ data }) {
  // console.log(data)
  return (
    <div className="col-6">
      <h1>Gợi Ý Xuất Chiếu</h1>
      {data?.map((item) => (
        <div className="item__data row" key={item.maHeThongRap}>
          {item?.lstCumRap?.map((itemListCumRap) => (
            <div
              className="item__listCumRap col-12"
              key={itemListCumRap.maCumRap}
            >
              {itemListCumRap?.danhSachPhim
                ?.slice(1, 2)
                .map((itemDanhSachPhim) => (
                  <div className="item__danhSachPhim row">
                    <div className="col-6">
                      <img
                        src={itemDanhSachPhim.hinhAnh}
                        width="100px"
                        height="150px"
                        alt="hinhAnh"
                      />
                    </div>
                    <div className="item__lichChieu col-6">
                      {itemDanhSachPhim?.lstLichChieuTheoPhim?.slice(0,4).map(
                        (itemLichChieu) => (
                          <div>
                            <p>
                            {itemDanhSachPhim.tenPhim.length > 17
                              ? itemDanhSachPhim.tenPhim.substring(0, 16)+"..."
                              : itemDanhSachPhim.tenPhim}
                          </p>
                          <button className="btn btn-warning">
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
                          </button>
                          </div>
                        )
                      )}
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
