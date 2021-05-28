import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "src/actions/movie";
import { BoxLoading } from "react-loadingg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

export default function Movie() {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const { data, isLoading, error } = useSelector((state) => state.movie);

  const movieSelected = data.filter((item) => {
    return Number(item.maPhim) === Number(movieId);
  });

  useEffect(() => {
    dispatch(getMovie());
  }, []);
  if (isLoading) {
    return (
      <div>
        <BoxLoading />;
      </div>
    );
  }
  if (error) {
    return <div>{error}</div>;
  }
  // console.log(data)
  return (
    <div id="detailMovie">
      {movieSelected.map((itemTrue) => (
        <div className="container">
          <div className="row">
            {console.log(itemTrue)}
            <div className="col-4">
              <img width="100%" src={itemTrue.hinhAnh} alt="hinhanh" />
            </div>
            <div className="col-8">
              <div className="col-12">
                <h3>{itemTrue.tenPhim}</h3>
              </div>
              <div className="col-12">
                <p>{itemTrue.moTa}</p>
              </div>
              <div className="col-12">
                <p>{itemTrue.ngayKhoiChieu}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
