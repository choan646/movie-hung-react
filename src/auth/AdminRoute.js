import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function AdminRoute({ children, ...props }) {
  const { userInfo } = useSelector((state) => state.auth);
  //Chua dang nhap
  if (!userInfo) {
    return <Redirect to={`/login?redirectTo=${props.path}`} />;
    // redirectTo ở đây hiện tại chỉ để sử dụng cho trang admin, và search = undefine (ở trang login)
  }
  //Neu dang nhap roi nhung maLoaiNguoiDung khong phai la QuanTri
  if (userInfo.maLoaiNguoiDung !== "QuanTri") {
    return <Redirect to="/" />;
  }
  return <Route {...props}>{children}</Route>;
}
