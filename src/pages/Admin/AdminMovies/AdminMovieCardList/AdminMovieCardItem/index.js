import React from "react";
import Button from '@material-ui/core/Button';
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";

export default function AdminMovieCardItem({ data,handleDeleteMovie ,getMovieSelected}) {
  return (
    <Card className="movieAdmin__cardItem col-2">
      <CardHeader>
        <img width="150px" height="230px" src={data?.hinhAnh} alt="hinhAnh" />
      </CardHeader>
      <CardBody>
        <p>
          <b>ID :</b> {data?.maPhim}
        </p>
        <h5>
          {data?.tenPhim.length > 15
            ? data?.tenPhim.substring(0, 14) + "..."
            : data?.tenPhim}
        </h5>
      </CardBody>
      <CardFooter>
        <Button variant="outlined" color="primary" onClick={()=>getMovieSelected(data)}>Sửa</Button>
        <Button variant="outlined" color="secondary" onClick={()=>handleDeleteMovie(data?.maPhim,data?.tenPhim)}>Xóa</Button>
      </CardFooter>
    </Card>
  );
}
