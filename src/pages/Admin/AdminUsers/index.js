import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, Pagination, PaginationItem } from "reactstrap";
import { SemipolarLoading } from "react-loadingg";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import { getUser, deleteUser } from "src/redux/actions/users";
import { IoPersonAdd } from "react-icons/io5";
import AdminUsersAdd from "./AdminUsersAdd";
import { addUser, updateUser } from "src/redux/actions/users";
import ListUser from "./ListUser";

export default function AdminUsers() {
  const dispatch = useDispatch();
  const { currentPage } = useParams();
  //UserModal setup
  const [modalUser, setModalUser] = useState(false);
  const toggleModalUser = () => setModalUser(!modalUser);

  const { user, isLoading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser(currentPage));
  }, [currentPage]);

  const handleAddUser = (values) => {
    dispatch(addUser(values));
    toggleModalUser();
    dispatch(getUser(currentPage));
  };

  const handleDeleteUser = (taiKhoan) => {
    Swal.fire({
      title: `Bạn có muốn xóa ${taiKhoan}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Đồng ý",
      cancelButtonColor: "#d33",
      cancelButtonText: "Hủy bỏ",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(taiKhoan));
        Swal.fire("Xóa Thành Công!", "", "success");
        dispatch(getUser(currentPage));
      }
    });
  };
  const handleUpdateUser = (values) => {
    console.log(values);
  };

  if (isLoading) {
    return (
      <div>
        <SemipolarLoading color="#6B439B" />
      </div>
    );
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="userAdmin">
      <div className="userAdmin__linkTo">
        <p>Quản Lý Người Dùng</p>
      </div>
      <Button
        color="primary"
        className="userAdmin__buttonAdd"
        style={{ marginLeft: "82%", marginBottom: "30px", marginTop: "-55px" }}
        onClick={toggleModalUser}
      >
        Thêm Người Dùng <IoPersonAdd style={{ marginLeft: "10px" }} />
      </Button>
      <AdminUsersAdd
        handleAddUser={handleAddUser}
        modalUser={modalUser}
        toggleModalUser={toggleModalUser}
      />

      <div className="userAdmin__content">
        <Table hover className="userAdmin__table">
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
            <ListUser
              data={user}
              handleDeleteUser={handleDeleteUser}
              handleUpdateUser={handleUpdateUser}
              modalUser={modalUser}
              toggleModalUser={toggleModalUser}
            />
          </tbody>
        </Table>
        <div className="userAdmin__pagination">
          <Pagination>
            <PaginationItem>
              <Link to="/admin/users/soTrang=1">1</Link>
            </PaginationItem>
            <PaginationItem>
              <Link to="/admin/users/soTrang=2">2</Link>
            </PaginationItem>
            <PaginationItem>
              <Link to="/admin/users/soTrang=3">3</Link>
            </PaginationItem>
            <PaginationItem>
              <Link to="/admin/users/soTrang=4">4</Link>
            </PaginationItem>
            <PaginationItem>
              <Link to="/admin/users/soTrang=5">5</Link>
            </PaginationItem>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
