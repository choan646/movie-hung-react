import { parse } from "qs";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {Table, Button, Modal,FormGroup, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import qs from "qs";


export default function AdminHome() {
    const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className="infoAdmin">
      <h1>Thông Tin Tài Khoản</h1>
      <div className="infoAdmin__content">
        <Table>
          <tr>
            <th>Tên Tài Khoản</th>
            <td>{userInfo.taiKhoan}</td>
          </tr>
          <tr>
            <th>Họ Tên Admin</th>
            <td>{userInfo.hoTen}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{userInfo.email}</td>
          </tr>
          <tr>
            <th>Số Điện thoại</th>
            <td>{userInfo.soDT}</td>
          </tr>
          <tr>
            <th>Mã Nhóm</th>
            <td>{userInfo.maNhom}</td>
          </tr>
        </Table>
        <div className="edit__info">
          <Button color="primary" onClick={toggle}>Chỉnh sửa thông tin </Button>
          <Modal isOpen={modal} toggle={toggle} >
        <ModalBody>
          <form>
            <FormGroup>
              <Label>
                Tên Tài Khoản
              </Label>
              <Input type="text" placeholder={userInfo.taiKhoan}/>
            </FormGroup>
            <FormGroup>
              <Label>
                Họ Tên Admin
              </Label>
              <Input type="text" placeholder={userInfo.hoTen}/>
            </FormGroup>
            <FormGroup>
              <Label>
                Email
              </Label>
              <Input type="text" placeholder={userInfo.email}/>
            </FormGroup>
            <FormGroup>
              <Label>
                Số Điện Thoại
              </Label>
              <Input type="text" placeholder={userInfo.soDT}/>
            </FormGroup>
            <FormGroup disabled>
              <Label>
                Mã Nhóm 
              </Label>
              <Input disabled value={userInfo.maNhom}/>
            </FormGroup>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  );
}
