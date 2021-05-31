import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "reactstrap";
import { getUser } from "src/actions/users";
import { BoxLoading } from "react-loadingg";


export default function AdminUsers() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, []);
  console.log(data);

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
      <h1>Quản Lý Người Dùng</h1>
      <Button color="primary" style={{marginLeft:"80%", marginBottom:"30px"}}>Thêm Người Dùng </Button>
      <Table hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên Tài Khoản</th>
            <th>Tên Người Dùng</th>
            <th>Email</th>
            <th>Số Điện Thoại</th>
            <th>Chức Vụ</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
             <tr key={index}>
                 <td>{index+1}</td>
                 <td>{item.taiKhoan}</td>
                 <td>{item.hoTen}</td>
                 <td>{item.email}</td>
                 <td>{item.soDt}</td>
                 <td>{item.maLoaiNguoiDung}</td>
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
