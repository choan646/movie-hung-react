import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Pagination, PaginationItem } from "reactstrap";
import { SemipolarLoading } from "react-loadingg";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import {
  getUser,
  deleteUser,
  addUser,
  updateUser,
  setUserSelected,
} from "src/redux/actions/users";
import { IoPersonAdd } from "react-icons/io5";
import AdminUsersAdd from "./AdminUsersAdd";
import ListUser from "./ListUser";
import Button from "@material-ui/core/Button";
import AdminUserUpdate from "./AdminUserUpdate";
import TextField from "@material-ui/core/TextField";

export default function AdminUsers() {
  const dispatch = useDispatch();
  const { currentPage } = useParams();

  //UserModal setup
  const [modalUser, setModalUser] = useState(false);
  const toggleModalUser = () => setModalUser(!modalUser);

  //UpdateModal setup
  const [modalUpdateUser, setModalUpdateUser] = useState(false);
  const toggleModalUpdateUser = () => setModalUpdateUser(!modalUpdateUser);

  //SearchUser set up
  const [searchKey, setSearchKey] = useState("");
  const typingTimeoutRef = useRef(null);
  // Tạm thời phần Search hơi cùi, dùng debounce để khắc phục tạm thời, sau khi submit được từ khóa lên thì nó render và k focus vào ô search

  const { user, selectedUser, isLoading, error } = useSelector(
    (state) => state.user
  );
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
  const getUserSelected = (item) => {
    dispatch(setUserSelected(item));
    toggleModalUpdateUser();
  };
  const handleUpdateUser = (values) => {
    toggleModalUpdateUser();
    dispatch(updateUser(values));
    dispatch(getUser(currentPage));
  };
  const handleChange = (event) => {
    const value = event.target.value;
    setSearchKey(value);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchKey: value,
      };
      handleSubmit(formValues);
    }, 700);
  };

  const handleSubmit = (formValues) => {
    if (formValues.searchKey != "") {
      dispatch(getUser("soTrang=1", `tuKhoa=${formValues.searchKey}`));
    } else {
      dispatch(getUser(currentPage));
    }
  };

  if (isLoading) {
    return (
      <div>
        <SemipolarLoading color="#6B439B" />
      </div>
    );
  }
  return (
    <div className="userAdmin">
      <div className="userAdmin__linkTo">
        <p>Quản Lý Người Dùng</p>
      </div>
      <Button
        variant="contained"
        color="primary"
        className="userAdmin__buttonAdd"
        style={{
          marginLeft: "82%",
          marginBottom: "30px",
          marginTop: "-55px",
          padding: "7px 10px",
        }}
        onClick={toggleModalUser}
      >
        Thêm Người Dùng{" "}
        <IoPersonAdd style={{ marginLeft: "10px", marginTop: "-5px" }} />
      </Button>
      <AdminUsersAdd
        handleAddUser={handleAddUser}
        modalUser={modalUser}
        toggleModalUser={toggleModalUser}
      />
      <div className="searchUser" style={{marginLeft: "35%",marginTop: "-70px",marginBottom: "60px",}}>
        <form>
          <TextField
            label="Tìm Người Dùng"
            size="small"
            variant="outlined"
            type="text"
            value={searchKey}
            style={{ width:"300px"}}
            onChange={handleChange}
          />
        </form>
      </div>
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
              getUserSelected={getUserSelected}
              handleDeleteUser={handleDeleteUser}
            />
            <AdminUserUpdate
              data={selectedUser}
              modalUpdateUser={modalUpdateUser}
              handleUpdateUser={handleUpdateUser}
              toggleModalUpdateUser={toggleModalUpdateUser}
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
