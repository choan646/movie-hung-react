import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  Button,
  Modal,
  FormGroup,
  ModalBody,
  Label,
  Alert,
} from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { getUserByTuKhoa, updateUser } from "src/actions/users";

const updateInfoAdminSchema = yup.object().shape({
  // taiKhoan: yup
  //   .string()
  //   .required("Tài khoản không được để trống")
  //   .min(3, "Tài khoản phải từ 3 ký tự trở lên")
  //   .max(20, "Tài khoản tối đa 20 ký tự"),
  matKhau: yup
    .string()
    .required("Mật khẩu không được để trống")
    .min(3, "Mật khẩu phải từ 3 ký tự trở lên")
    .max(20, "Mật khẩu tối đa 20 ký tự"),
  email: yup
    .string()
    .required("Email không được để trống")
    .min(3, "Email phải từ 3 ký tự trở lên")
    .max(40, "Email tối đa 40 ký tự")
    .email("Email không đúng cú pháp"),
  soDt: yup
    .string()
    .matches(/^[0-9]+$/)
    .required("Số điện thoại không được để trống")
    .min(3, "Số điện thoại 3 ký tự trở lên")
    .max(20, "Số điện thoại tối đa 20 ký tự"),
  hoTen: yup
    .string()
    .required("Họ Tên không được để trống")
    .min(3, "Họ Tên phải từ 3 ký tự trở lên")
    .max(30, "Họ Tên tối đa 30 ký tự"),
});

export default function AdminHome() {
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
      <h1>Thông Tin Tài Khoản</h1>

      <div className="infoAdmin__content">
        {user.map((item) => (
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
          <Button color="primary" onClick={toggle}>
            Chỉnh sửa thông tin
          </Button>
          <Modal isOpen={modal} toggle={toggle}>
            {user.map((item) => (
              <ModalBody>
                <Formik
                  initialValues={
                    {
                      taiKhoan: item.taiKhoan,
                      matKhau: item.matKhau,
                      email: item.email,
                      soDt: item.soDt,
                      maNhom: "GP11",
                      maLoaiNguoiDung: "QuanTri",
                      hoTen: item.hoTen,
                    }
                  }
                  validationSchema={updateInfoAdminSchema}
                  onSubmit={handleUpdateInfoAdmin}
                  render={(formikProps) => (
                    <Form className="row">
                      <FormGroup className="col-6">
                        <Label>Tên Tài Khoản</Label>
                        <Field
                          className="form-control"
                          name="taiKhoan"
                          disabled
                          onChange={formikProps.handleChange}
                        />
                        <ErrorMessage name="taiKhoan">
                          {(msg) => <Alert color="danger">{msg}</Alert>}
                        </ErrorMessage>
                      </FormGroup>
                      <FormGroup className="col-6">
                        <Label>Họ Tên Admin</Label>
                        <Field
                          type="text"
                          className="form-control"
                          name="hoTen"
                          onChange={formikProps.handleChange}
                        />
                        <ErrorMessage name="hoTen">
                          {(msg) => <Alert color="danger">{msg}</Alert>}
                        </ErrorMessage>
                      </FormGroup>
                      <FormGroup className="col-12">
                        <Label>Email</Label>
                        <Field
                          type="email"
                          className="form-control"
                          name="email"
                          onChange={formikProps.handleChange}
                        />
                        <ErrorMessage name="email">
                          {(msg) => <Alert color="danger">{msg}</Alert>}
                        </ErrorMessage>
                      </FormGroup>
                      <FormGroup className="col-6">
                        <Label>Số Điện Thoại</Label>
                        <Field
                          type="text"
                          className="form-control"
                          name="soDt"
                          onChange={formikProps.handleChange}
                        />
                        <ErrorMessage name="soDt">
                          {(msg) => <Alert color="danger">{msg}</Alert>}
                        </ErrorMessage>
                      </FormGroup>
                      <FormGroup className="col-6">
                        <Label>Mật Khẩu </Label>
                        <Field
                          type="text"
                          className="form-control"
                          name="matKhau"
                        />
                        <ErrorMessage name="matKhau">
                          {(msg) => <Alert color="danger">{msg}</Alert>}
                        </ErrorMessage>
                      </FormGroup>
                      <FormGroup disabled className="col-6">
                        <Label>Mã Nhóm</Label>
                        <Field
                          className="form-control"
                          disabled
                          name="maNhom"
                        />
                      </FormGroup>
                      <FormGroup disabled className="col-6">
                        <Label>Mã Loại Người Dùng</Label>
                        <Field
                          disabled
                          className="form-control"
                          name="maLoaiNguoiDung"
                        />
                      </FormGroup>
                      <div className="col-12" style={{marginTop:"50px", textAlign:"center"}}>
                      <Button style={{marginRight:"20px"}} color="primary">Chỉnh Sửa</Button>
                      <Button color="danger" onClick={toggle}>
                Cancel
              </Button>
                      </div>
                      
                    </Form>
                  )}
                />
              </ModalBody>
            ))}

          </Modal>
        </div>
      </div>
    </div>
  );
}
