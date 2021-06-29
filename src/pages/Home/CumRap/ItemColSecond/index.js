import React from "react";
import { Link } from "react-router-dom";

export default function ItemColSecond({ data }) {
  return (
    <div className="col-6">
      {data?.slice(0, 6).map((item, index) => (
        <div className="item__colSecond__detail" key={index}>
          <p>{item.tenCumRap}</p>
          <p>Địa Chỉ : {item.diaChi}</p>
          <Link to={`/rap-chieu-phim/${item.maCumRap}`}>
            <i>[ Chi Tiết ]</i>
          </Link>
        </div>
      ))}
    </div>
  );
}
