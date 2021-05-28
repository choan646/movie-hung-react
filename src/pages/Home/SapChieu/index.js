import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BoxLoading } from "react-loadingg";
import { getMovie } from "src/actions/movie";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import * as Icon from "react-bootstrap-icons";
import { Link, Redirect } from "react-router-dom";

export default function SapChieu() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.movie);
  const dataSapChieu = data.slice(12, 24);
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
  return (
    <div className="container">
      <div className="row">
        {dataSapChieu.map((item) => (
          <Card
            key={item.maPhim}
            className="col-sm-3 card"
            style={{ border: "none" }}
          >
            <div className="card-header">
              <CardImg top src={item.hinhAnh} alt="Card image caption" />
              <div className="card-icon">
                <Icon.PlayCircle size={50} />
              </div>
            </div>
            <CardBody>
              <CardTitle tag="h6">
                {item.tenPhim.length > 17
                  ? item.tenPhim.substring(0, 16) + "..."
                  : item.tenPhim}
              </CardTitle>
              <CardText>Đánh Giá : {item.danhGia} điểm</CardText>
              <div className="card__button">
                <Link to={"/movie/" + `${item.maPhim}`}>Chi Tiết Phim</Link>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
