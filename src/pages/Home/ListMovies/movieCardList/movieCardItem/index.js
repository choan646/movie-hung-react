import React from "react";
import { Link } from "react-router-dom";
import { CardText, CardBody, CardTitle, Modal } from "reactstrap";


export default function MovieCardItem({ data, isOpen, toggle }) {
  return (
    <div>
      <CardBody>
        <CardTitle tag="h6">
          {data?.tenPhim.length > 17
            ? data?.tenPhim.substring(0, 16) + "..."
            : data?.tenPhim}
        </CardTitle>
        <CardText>Đánh Giá : {data?.danhGia} điểm</CardText>
        <div className="card__button">
          <Link to={`/movie/${data?.maPhim}`}>Chi Tiết Phim</Link>
        </div>
      </CardBody>
      <Modal className="modalTrailler" isOpen={isOpen} toggle={toggle}>
        <iframe
          src={data?.trailer}
          width="900px"
          height="468px"
          frameborder="1"
        />
      </Modal>
    </div>
  );
}
