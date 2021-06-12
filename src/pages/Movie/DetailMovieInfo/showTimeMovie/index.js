import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import { getShowTimesByIdMovie } from "src/actions/cinemas";

export default function ShowTimeMovie({ data }) {
  const dispatch = useDispatch();
  const { dataShowTimesByMovie, isLoading, error } = useSelector(
    (state) => state.cinema
  );
  useEffect(() => {
    dispatch(getShowTimesByIdMovie(data.maPhim));
  }, [data.maPhim]);
  return (
    <div className="tab__lichChieuPhim">
      {console.log(dataShowTimesByMovie)}

      {dataShowTimesByMovie?.heThongRapChieu?.map((item) => (
        <div className="tab__lichChieuPhim__listItem" key={item?.maHeThongRap}>
          <div className="tab__lichChieuPhim__title d-flex">
            <img
              width="40px"
              height="40px"
              src={item?.logo}
              alt="logoRapPhim"
            />
            <h3>{item?.tenHeThongRap}</h3>
          </div>
          <div className="tab__lichChieuPhim__placeItem">
            {item?.cumRapChieu?.map((placeItem) => (
              <>
                <h5><i>{placeItem?.tenCumRap}</i></h5>
                <div className="tab__lichChieuPhim__timeItem row">
                  {placeItem?.lichChieuPhim?.map((timeItem) => (
                    <div className="col">
                      <button className="btn">
                      <Link to={`/checkout/${dataShowTimesByMovie.maPhim}`}>
                      <p>
                        {timeItem?.ngayChieuGioChieu.substring(11, 13) +
                          "h" +
                          timeItem?.ngayChieuGioChieu.substring(14,16) +
                          "p"}
                      </p>
                      <p>
                      {
                          timeItem?.ngayChieuGioChieu.substring(8, 10) +
                          "/" +
                          timeItem?.ngayChieuGioChieu.substring(5, 7) +
                          "/" +
                          timeItem?.ngayChieuGioChieu.substring(0, 4)}
                      </p>
                      </Link>
                      </button>
                    </div>
                  ))}
                </div>
              </>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
