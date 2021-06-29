import React, { useState } from "react";
import { Card, CardImg } from "reactstrap";
import MovieCardItem from "../movieCardList/movieCardItem";
import * as Icon from "react-bootstrap-icons";

export default function MovieCardList({ data }) {
  const toggleTrailer = () => setModalTrailer(!modalTrailer);
  const [modalTrailer, setModalTrailer] = useState(false);
  return (
    <Card
      key={data.maPhim}
      className="col-md-3 card px-2 my-3"
      style={{ border: "none" }}
    >
      <div className="card-header">
        <CardImg top src={data.hinhAnh} alt="Card image caption" />
        <div className="card-icon">
          <Icon.PlayCircle size={50} onClick={toggleTrailer} />
        </div>
      </div>
      <MovieCardItem data={data} isOpen={modalTrailer} toggle={toggleTrailer} />
    </Card>
  );
}
