import React from "react";
import { Button, Card, CardBody, CardFooter, CardHeader } from "reactstrap";

export default function AdminMovieCardItem({ data }) {
  return (
    <Card className="movieAdmin__cardItem col">
      <CardHeader>
        <img width="150px" height="230px" src={data?.hinhAnh} alt="hinhAnh" />
      </CardHeader>
      <CardBody>
        <p>
          <b>ID :</b> {data.maPhim}
        </p>
        <h5>
          {data?.tenPhim.length > 15
            ? data?.tenPhim.substring(0, 14) + "..."
            : data?.tenPhim}
        </h5>
      </CardBody>
      <CardFooter>
        <Button color="secondary">Sửa</Button>
        <Button color="danger">Xóa</Button>
      </CardFooter>
    </Card>
  );
}
