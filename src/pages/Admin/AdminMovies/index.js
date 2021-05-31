import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "reactstrap";
import { getMovie } from "src/actions/movie";
import { BoxLoading } from "react-loadingg";

export default function AdminMovies() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.movie);

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
    <div>
      <h1>Quản Lý Phim</h1>
      <Button
        color="primary"
        style={{ marginLeft: "80%", marginBottom: "30px" }}
      >
        Thêm Phim{" "}
      </Button>
      <Table hover>
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Hình Ảnh</th>
                  <th>Thông Tin</th>
                  <th></th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
              {data.map((item)=>(
               <tr>
                   <td>{item.maPhim}</td>
                   <td><img width="170px" height="250px" src={item.hinhAnh} alt="hinhanh" /></td>
                   <td style={{marginRight:"30px"}}>
                       <p><b>Tên Phim : </b>{item.tenPhim}</p>
                       <p><b>Nội Dung : </b>{item.moTa}</p>
                       <p><b>Nhóm Phim : </b>{item.maNhom}</p>
                       <p><b>Ngày Khởi Chiếu : </b>{item.ngayKhoiChieu.substring(8, 10)+"/"+item.ngayKhoiChieu.substring(5, 7)+"/"+item.ngayKhoiChieu.substring(0, 4)}</p>
                       <p><b>Đánh Giá : </b>{item.danhGia} điểm</p>
                   </td>
                   <td>
                   <Button color="secondary">Sửa</Button>
                     
                   </td>
                   <td>
                   <Button color="danger">Xóa</Button>
                   </td>
              </tr>   
              ))}
              
          </tbody>
      </Table>
    </div>
  );
}
