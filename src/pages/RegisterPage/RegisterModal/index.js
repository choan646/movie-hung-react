import React from "react";
import { FormGroup, Label, Alert, Modal } from "reactstrap";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { registerUserSchema } from "src/services/schema";

export default function RegisterModal({handleRegister}) {
  return (
    <>
    <Modal className="form__register__content" isOpen>
      <Formik
        initialValues={{
          taiKhoan: "",
          hoTen: "",
          matKhau: "",
          email: "",
          soDt: "",
          maNhom: "GP11",
          maLoaiNguoiDung: "KhachHang",
        }}
        validationSchema={registerUserSchema}
        onSubmit={handleRegister}
        render={(formikProps) => (
          <Form className="form__register">
            <div className="logo__register">
              <Link to="/">
                <img
                  className="webLogo"
                  styleLogo
                  src="/img/group@2x.png"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="content__register">
              <h1>Đăng Ký Tài Khoản</h1>
            </div>
            <div className="row form__register__detail">
              <FormGroup className="col-6">
                <Label>Tài Khoản </Label>
                <Field
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="taiKhoan">
                  {(msg) => <Alert color="danger">{msg}</Alert>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup className="col-6">
                <Label>Mật Khẩu </Label>
                <Field
                  type="password"
                  className="form-control"
                  name="matKhau"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="matKhau">
                  {(msg) => <Alert color="danger">{msg}</Alert>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup className="col-6">
                <Label>Họ Tên </Label>
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

              <FormGroup className="col-6">
                <Label>Số Điện Thoại </Label>
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
                <Label>Email </Label>
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
                <Label>Mã Nhóm </Label>
                <Field
                  className="form-control"
                  disabled
                  value="GP11"
                  name="maNhom"
                />
              </FormGroup>
              <FormGroup className="col-6" hidden>
                <Label>abc</Label>
                <Field
                  className="form-control"
                  value="KhachHang"
                  name="maLoaiNguoiDung"
                />
              </FormGroup>
            </div>
            <div className="button__submitForm">
              <button className="btn btn-primary">Đăng Ký </button>
            </div>
            <Link to="/" className="back__home">
              +
            </Link>
          </Form>
        )}
      />
    </Modal>
    </>
  );
}
