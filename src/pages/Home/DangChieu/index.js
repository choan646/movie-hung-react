import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BoxLoading } from "react-loadingg";
import { getMovie } from "src/actions/movie";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

export default function DangChieu() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.movie);
  const dataDangChieu = data.slice(0, 16);
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
        {dataDangChieu.map((item) => (
          <Card key={item.maPhim} className="col-md-3 card px-2 my-3" style={{border:"none"}}>
            <CardImg top width="100%" height="74%" src={item.hinhAnh} alt="Card image caption" />
            <CardBody>
              <CardTitle tag="h5">{item.tenPhim}</CardTitle>
              <CardText>Đánh Giá : {item.danhGia} điểm</CardText>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
