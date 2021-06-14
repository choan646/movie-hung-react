import React, { useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCinemas,
  getCumRapByCinemas,
  getShowTimesByCinemas,
} from "src/actions/cinemas";
import { SemipolarLoading } from "react-loadingg";

export default function Cinemas() {
  const dispatch = useDispatch();
  const { cinemasId } = useParams();
  console.log(cinemasId);
  const {
    dataCinemas,
    dataCumRapByCinemas,
    dataShowTimesByCinemas,
    isLoading,
    error,
  } = useSelector((state) => state.cinema);

  useEffect(() => {
    dispatch(getCinemas());
    //   dispatch(getCumRapByCinemas(defaultValue));
    dispatch(getShowTimesByCinemas(""));
  }, []);
  // console.log(dataShowTimesByCinemas)
  const cinemasSelected = dataShowTimesByCinemas?.map((showTimesByCinemas) => {
    return showTimesByCinemas?.lstCumRap?.filter((showTimesByCinemasA) => {
      return String(showTimesByCinemasA.maCumRap) === String(cinemasId);
    });
  });
  console.log(cinemasSelected);

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
    <div>
      <p style={{ paddingTop: "200px" }}>day la cinema</p>
    </div>
  );
}
