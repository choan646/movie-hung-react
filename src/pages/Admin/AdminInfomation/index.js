import React from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";


export default function AdminInfomation() {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="infoAdmin">
      <div className="infoAdmin__linkTo">
        <p>
          <Link to="/admin/home">Home </Link>/ Thông tin cá nhân
        </p>
      </div>
      <div className="infoAdmin__content">
          <Table>
            <tr>
              <th>Tên Tài Khoản</th>
              <td>{userInfo?.taiKhoan}</td>
            </tr>
            <tr>
              <th>Họ Tên Admin</th>
              <td>{userInfo?.hoTen}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{userInfo?.email}</td>
            </tr>
            <tr>
              <th>Số Điện thoại</th>
              <td>{userInfo?.soDT}</td>
            </tr>
            <tr>
              <th>Mã Nhóm</th>
              <td>GP11</td>
            </tr>
          </Table>
      </div>
    </div>
  );
}
