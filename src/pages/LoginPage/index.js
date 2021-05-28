import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input, FormGroup, Label, Alert, Modal } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../actions/auth";
import { Redirect, useLocation, Link } from "react-router-dom";
import qs from "qs";

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
});

export default function LoginPage() {
  const dispatch = useDispatch();
  const { userInfo, isLoading, error } = useSelector((state) => state.auth);
  const location = useLocation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    // sử dụng khi UI component không hỗ register
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (values) => {
    dispatch(login(values));
  };
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
      id="login"
      style={{
        backgroundImage: "url('/img/bg2.jpg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <Modal className="form__login__content" isOpen>
        <form className="form__login" onSubmit={handleSubmit(handleLogin)}>
          <div className="logo__login">
            <Link to="/">
              <img
                className="webLogo"
                styleLogo
                src="/img/group@2x.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="content__login">
            <p>Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!</p>
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
          </div>

          {error && <Alert color="danger">{error}</Alert>}

          <div className="row list__login__by">
            <div className="col-md-6 item__login__by">
              <img src="img/btn-FB.png" alt="facebook" />
            </div>
            <div className="col-md-6 item__login__by">
              <img src="/img/btn-Google.png" alt="gmail" />
            </div>
          </div>
          <div className="row btn__login">
            <button className="btn btn-success">Đăng Nhập</button>
          </div>
          <div className="row link__register">
            <Link to="/register">Đăng Ký Tài Khoản</Link>
          </div>
          <Link to="/" className="back__home">
            +
          </Link>
        </form>
      </Modal>
    </div>
  );
}
