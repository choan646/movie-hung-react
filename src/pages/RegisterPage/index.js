import React from "react";
import { FormGroup, Label, Alert, Modal, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Redirect,useLocation, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { register } from "src/actions/auth";
import qs from "qs";


// Tạo schame validation
const signUpUserSchema = yup.object().shape({
  taiKhoan: yup
    .string()
    .required("Tài khoản không được để trống")
    .min(3, "Tài khoản phải từ 3 ký tự trở lên")
    .max(20, "Tài khoản tối đa 20 ký tự"),
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

export default function Register() {
  const dispatch = useDispatch();
  const { userInfo, isLoading, error } = useSelector((state) => state.auth);
  const location = useLocation();


  const handleRegister = (values) => {
    dispatch(register(values));
  };
  // if (userInfo) {
  //   return <Redirect to="/" />;
  // }
  if (userInfo) {
    const { redirectTo } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    if (redirectTo) {
      return <Redirect to={redirectTo} />;
    }
    return <Redirect to="/" />;
  }

  return (
    <div
      id="register"
      style={{
        backgroundImage: "url('/img/bg2.jpg')",
        backgroundSize: "contain",
      }}
    >
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
          validationSchema={signUpUserSchema}
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
                    type="text"
                    className="form-control"
                    disabled
                    value="GP11"
                    name="maNhom"
                  />
                </FormGroup>
                <FormGroup className="col-6" hidden>
                  <Label>abc</Label>
                  <Field
                    type="text"
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
    </div>
  );
}
