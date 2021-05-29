import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BoxLoading } from "react-loadingg";
import { getMovie } from "src/actions/movie";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Modal,
} from "reactstrap";
import * as Icon from "react-bootstrap-icons";
import { Link, Redirect } from "react-router-dom";

export default function DangChieu() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.movie);
  const dataDangChieu = data.slice(0, 12);
  const toggleTrailer = () => setModalTrailer(!modalTrailer);
  const [modalTrailer, setModalTrailer] = useState(false);
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
          <Card
            key={item.maPhim}
            className="col-md-3 card px-2 my-3"
            style={{ border: "none" }}
          >
            <div className="card-header">
              <CardImg top src={item.hinhAnh} alt="Card image caption" />
              <div className="card-icon">
                <Icon.PlayCircle size={50} onClick={toggleTrailer} />
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
                <Link to={"/movie/" + `${item.maPhim}`}>
                  Chi Tiết Phim
                </Link>
              </div>
            </CardBody>
            <Modal
              className="modalTrailler"
              isOpen={modalTrailer}
              toggle={toggleTrailer}
            >
              <iframe
                src={item.trailer}
                width="900px"
                height="468px"
                frameborder="1"
                autoplay
              ></iframe>
            </Modal>
          </Card>
        ))}
      </div>
    </div>
  );
}
