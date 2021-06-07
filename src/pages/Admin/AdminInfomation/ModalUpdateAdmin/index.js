import React from "react";
import { Modal, FormGroup, ModalBody, Label, Alert,Button } from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {updateInfoAdminSchema} from "src/actions/users"
export default function ModalUpdateAdmin({user,handleUpdateInfoAdmin,modal,toggle}) {
  return (
    <div>
      <Modal className="edit__info__modal" isOpen={modal} toggle={toggle}>
        {user.map((item) => (
          <ModalBody>
            <Formik
              initialValues={{
                taiKhoan: item.taiKhoan,
                matKhau: item.matKhau,
                email: item.email,
                soDt: item.soDt,
                maNhom: "GP11",
                maLoaiNguoiDung: "QuanTri",
                hoTen: item.hoTen,
              }}
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
                    <Field className="form-control" disabled name="maNhom" />
                  </FormGroup>
                  <FormGroup disabled className="col-6">
                    <Label>Mã Loại Người Dùng</Label>
                    <Field
                      disabled
                      className="form-control"
                      name="maLoaiNguoiDung"
                    />
                  </FormGroup>
                  <div
                    className="col-12"
                    style={{ marginTop: "50px", textAlign: "center" }}
                  >
                    <Button style={{ marginRight: "20px" }} color="primary">
                      Chỉnh Sửa
                    </Button>
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
  );
}
