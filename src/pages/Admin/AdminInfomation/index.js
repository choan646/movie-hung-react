import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { getUserByTuKhoa, updateUser } from "src/actions/users";
import ModalUpdateAdmin from "./ModalUpdateAdmin";

export default function AdminInfomation() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getUserByTuKhoa(userInfo.taiKhoan));
  }, []);
  const { user, isLoading, error } = useSelector((state) => state.user);
  const handleUpdateInfoAdmin = (values) => {
    toggle();
    dispatch(updateUser(values));
  };
  return (
    <div className="infoAdmin">
      <div className="infoAdmin__linkTo">
        <p>
          <Link to="/admin/home">Home </Link>/ Thông tin cá nhân
        </p>
      </div>
      <div className="infoAdmin__content">
        {user?.map((item) => (
          <Table>
            <tr>
              <th>Tên Tài Khoản</th>
              <td>{item.taiKhoan}</td>
            </tr>
            <tr>
              <th>Họ Tên Admin</th>
              <td>{item.hoTen}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{item.email}</td>
            </tr>
            <tr>
              <th>Số Điện thoại</th>
              <td>{item.soDt}</td>
            </tr>
            <tr>
              <th>Mã Nhóm</th>
              <td>GP11</td>
            </tr>
          </Table>
        ))}
        <div className="edit__info">
          <Button
            className="edit__info__button"
            color="primary"
            onClick={toggle}
          >
            Chỉnh sửa thông tin
          </Button>
          <ModalUpdateAdmin user={user} handleUpdateInfoAdmin={handleUpdateInfoAdmin} modal={modal} toggle={toggle}/>
        </div>
      </div>
    </div>
  );
}
