import React, { useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getShowTimesByCinemas } from "src/actions/cinemas";
import { SemipolarLoading } from "react-loadingg";
import DetailCinema from "./DetailCinema";

export default function Cinemas() {
  const dispatch = useDispatch();
  const { cinemasId } = useParams();
  const { dataShowTimesByCinemas, isLoading, error } = useSelector(
    (state) => state.cinema
  );

  useEffect(() => {
    dispatch(getShowTimesByCinemas(""));
  }, []);
  const cinemasSelected = dataShowTimesByCinemas?.map((showTimesByCinemas) =>
    showTimesByCinemas?.lstCumRap?.filter(
      (showTimesByCinemasA) =>
        String(showTimesByCinemasA.maCumRap) == String(cinemasId)
    )
  );

  const userCheck = localStorage.getItem("userInfo");
  if (userCheck == null) {
    return <Redirect to="/login" />;
  }
  if (isLoading) {
    return (
      <div>
        <SemipolarLoading color="#6B439B" />
      </div>
    );
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div
      id="chiTietCumRapPhim"
      className="chiTietCumRapPhim"
      style={{
        background:
          "linear-gradient(to top, rgb(10, 32, 41), transparent 200%)",
        paddingTop: "100px",
      }}
    >
      {cinemasSelected?.map((listHeThongRap) => {
        return listHeThongRap?.map((cumRapSelected) => (
          <div className="container" style={{ padding: "70px" }}>
            {/* {console.log(cumRapSelected)} */}
            <div className="cinema__content row">
              <div className=" col-4 img__RapPhim">
                <img
                  width="250px"
                  height="350px"
                  src="/img/hinhAnhRapPhim.jpg"
                  alt="hinhAnh"
                />
              </div>
              <div className="col-8 info__RapPhim">
                <h1>{cumRapSelected.tenCumRap}</h1>
                <p>{cumRapSelected.diaChi}</p>
              </div>
              <div className="col-12 detail_RapPhim">
                <DetailCinema data={cumRapSelected} />
              </div>
            </div>
          </div>
        ));
      })}
    </div>
  );
}
