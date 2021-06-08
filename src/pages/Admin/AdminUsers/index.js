import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, Pagination, PaginationItem } from "reactstrap";
import { SemipolarLoading } from "react-loadingg";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import { getUser, deleteUser } from "src/actions/users";
import { IoPersonAdd } from "react-icons/io5";
import AdminUsersModalAdd from "./AdminUsersModalAdd";
import { addUser } from "src/actions/users";

export default function AdminUsers() {
  const dispatch = useDispatch();
  const { currentPage } = useParams();
  const [modalAddUser, setModalAddUser] = useState(false);
  const toggleAddUser = () => setModalAddUser(!modalAddUser);

  const { user, isLoading, error } = useSelector((state) => state.user);
  
  useEffect(() => {
    dispatch(getUser(currentPage));
  }, [currentPage]);
  
  const handleAddUser = (values) => {
    toggleAddUser();
    dispatch(addUser(values));
  };
  const handleDeleteUser = (taiKhoan) => {
    Swal.fire({
      title: "Bạn Có Muốn Xóa?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Đồng Ý Xóa",
      cancelButtonText: "Hủy Bỏ",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(taiKhoan));
        Swal.fire("Xóa Thành Công!", "", "success");
      }
    });
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
        onClick={toggleAddUser}
      >
        Thêm Người Dùng <IoPersonAdd style={{ marginLeft: "10px" }} />
        <AdminUsersModalAdd
          handleAddUser={handleAddUser}
          modalAddUser={modalAddUser}
          toggleAddUser={toggleAddUser}
        />
      </Button>

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
            {user.items?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.taiKhoan}</td>
                <td>{item.hoTen}</td>
                <td>{item.email}</td>
                <td>{item.soDt}</td>
                <td>{item.maLoaiNguoiDung}</td>
                <td>
                  <Button color="secondary">Sửa</Button>
                </td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => handleDeleteUser(item.taiKhoan)}
                  >
                    Xóa
                  </Button>
                </td>
              </tr>
            ))}
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
