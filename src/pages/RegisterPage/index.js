import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input, FormGroup, Label, Alert, Modal } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Redirect,Link } from "react-router-dom";

// Tạo schame validation
const schema = yup.object().shape({
  taiKhoan: yup
    .string()
    .required("Tài khoản không được để trống")
    .min(3, "Tài khoản phải từ 3 đến 20 kí tự")
    .max(20, "Tài khoản phải từ 5 đến 20 kí tự"),
  matKhau: yup
    .string()
    .required("Mật khẩu không được để trống")
    .min(3, "Tài khoản phải từ 3 đến 20 kí tự")
    .max(20, "Tài khoản phải từ 5 đến 20 kí tự"),
    email: yup
    .string()
    .required("Email không được để trống")
    .min(3, "Email phải từ 3 đến 20 kí tự")
    .max(20, "Email phải từ 5 đến 40 kí tự"),
    soDt: yup
    .string()
    .required("Số điện thoại không được để trống")
    .min(3, "Số điện thoại phải từ 3 đến 20 kí tự")
    .max(20, "Số điện thoại phải từ 5 đến 20 kí tự"),
    hoTen:yup
    .string()
    .required("Họ Tên không được để trống")
    .min(3, "Họ Tên phải từ 3 đến 20 kí tự")
    .max(20, "Họ Tên phải từ 5 đến 20 kí tự"),
});

export default function Register() {
    const dispatch = useDispatch();
    const { userInfo, isLoading, error } = useSelector((state) => state.auth);
    
  const {
    register,
    formState: { errors },
    handleSubmit,
    // sử dụng khi UI component không hỗ register
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = (values) => {
    dispatch(register(values));
  };

//   if (userInfo) {
//     const { redirectTo } = qs.parse(location.search, {
//       ignoreQueryPrefix: true,
//     });
//     if (redirectTo) {
//       return <Redirect to={redirectTo} />;
//     }
//     return <Redirect to="/" />;
//   }
if(userInfo){
  return <Redirect to="/"/>
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
        <form className="form__register" onSubmit={handleSubmit(handleRegister)}>
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
          <div className="row">
            <div className="col-md-6">
              <FormGroup>
                <Label>Tài Khoản</Label>
                <Controller
                  name="taiKhoan"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: {
                      value: true,
                      message: "Tài khoản không được để trống",
                    },
                  }}
                  render={({ field }) => {
                    return <Input type="text" {...field} />;
                  }}
                />
                {errors.taiKhoan && (
                  <Alert color="danger">{errors.taiKhoan.message}</Alert>
                )}
              </FormGroup>
            </div>
            <div className="col-md-6">
              <FormGroup>
                <Label>Mật Khẩu</Label>
                <Controller
                  name="matKhau"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: {
                      value: true,
                      message: "Mật khẩu không được để trống",
                    },
                  }}
                  render={({ field }) => {
                    return <Input type="password" {...field} />;
                  }}
                />
                {errors.matKhau && (
                  <Alert color="danger">{errors.matKhau.message}</Alert>
                )}
              </FormGroup>
            </div>
            
            <div className="col-md-6">
              <FormGroup>
                <Label>Họ Tên</Label>
                <Controller
                  name="hoTen"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: {
                      value: true,
                      message: "Họ tên không được để trống",
                    },
                  }}
                  render={({ field }) => {
                    return <Input type="text" {...field} />;
                  }}
                />
                {errors.hoTen && (
                  <Alert color="danger">{errors.hoTen.message}</Alert>
                )}
              </FormGroup>
            </div>
            <div className="col-md-6">
              <FormGroup>
                <Label>Số Điện Thoại</Label>
                <Controller
                  name="soDt"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: {
                      value: true,
                      message: "Số điện thoại không được để trống",
                    },
                  }}
                  render={({ field }) => {
                    return <Input type="text" {...field} />;
                  }}
                />
                {errors.soDt && (
                  <Alert color="danger">{errors.soDt.message}</Alert>
                )}
              </FormGroup>
            </div>
            <div className="col-md-12">
              <FormGroup>
                <Label>Email</Label>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: {
                      value: true,
                      message: "Email không được để trống",
                    },
                  }}
                  render={({ field }) => {
                    return <Input type="text" {...field} />;
                  }}
                />
                {errors.email && (
                  <Alert color="danger">{errors.email.message}</Alert>
                )}
              </FormGroup>
            </div>
          </div>

          {error && <Alert color="danger">{error}</Alert>}
          <button className="btn btn-primary mt-3">Đăng Ký</button>
          <Link to="/" className="back__home">
            +
          </Link>
        </form>
      </Modal>
    </div>
  );
}