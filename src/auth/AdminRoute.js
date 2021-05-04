import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AdminRoute({children,...props}) {
  const { userInfo } = useSelector((state) => state.auth);
  //Chua dang nhap
  if (!userInfo) {
    return <Redirect to={`/login?redirectTo=${props.path}`} />;
  }
  //Neu dang nhap roi nhung maLoaiNguoiDung khong phai la GV
  if (userInfo.maLoaiNguoiDung !== "QuanTri") {
    return <Redirect to="/" />;
  }
  return <Route {...props}>{children}</Route>;
}
