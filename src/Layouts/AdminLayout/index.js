import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

export default function AdminLayout({ children }) {
  const { userInfo } = useSelector((state) => state.auth);
  const [dropdownOpen, setOpen] = useState(false);
  const toggleLogout = () => setOpen(!dropdownOpen);

  const handleLogout = () => {
    localStorage.clear();
    // window.location.reload();
    
  }
  if (!userInfo) {
    return <Redirect to="/login" />;
  }
  const nameAdmin = userInfo.hoTen;
  return (
    <div id="admin">
      <div className="d-flex title__admin">
        <h2>Cybersoft</h2>
        {/* <h1>Chào Mừng Đến Trang ADMIN</h1> */}
        <ButtonDropdown
          className="account"
          isOpen={dropdownOpen}
          toggle={toggleLogout}
        >
          <DropdownToggle caret>
            {nameAdmin}
            {/* <img src="/img/dropdown-icon.png" alt="dropdown" /> */}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={()=>handleLogout()}>Đăng Xuất</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
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
