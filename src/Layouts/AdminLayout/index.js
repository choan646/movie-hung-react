import React from "react";
import { Redirect, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AdminLayout({ children }) {
  const { userInfo} = useSelector((state) => state.auth);
  if(!userInfo) {
    return <Redirect to="/login"/>
  }
  const nameAdmin = userInfo.hoTen;
  return (
    <div id="admin">
      <div className="d-flex title__admin">
        <h2>Cybersoft</h2>
        {/* <h1>Chào Mừng Đến Trang ADMIN</h1> */}
        <div className="d-flex account">
          <p>{nameAdmin}</p>
          <img src="/img/dropdown-icon.png" alt="dropdown" />
        </div>
      </div>
      <div className="row admin__content">
        <div className="col-md-2 content__left">
          <ul>
            <li>
              <Link to="/admin/home">Thông Tin Tài Khoản</Link>
            </li>
            <li>
              <Link to="/admin/movies">Quản Lý Phim</Link>
            </li>
            <li>
              <Link to="/admin/users">Quản lý Người Dùng</Link>
            </li>
            <li>
              <Link to="/admin/cinemas">Quản Lý Lịch Chiếu</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-9 content__right">{children}</div>
      </div>
    </div>
  );
}
