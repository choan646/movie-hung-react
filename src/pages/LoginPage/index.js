import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input, FormGroup, Label, Alert } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../actions/auth";
import { Redirect, useLocation , Link} from "react-router-dom";
import qs from "qs";

// Tạo schame validation
const schema = yup.object().shape({
  taiKhoan: yup
    .string()
    .required("Tài khoản không được để trống")
    .min(5, "Tài khoản phải từ 5 đến 20 kí tự")
    .max(20, "Tài khoản phải từ 5 đến 20 kí tự"),
  matKhau: yup.string().required("Mật khẩu không được để trống"),
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

  console.log("Render");
  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <h1>Login Page</h1>
      <div className="form-group">
        <label>Tài Khoản</label>
        <input type="text" className="form-control" {...register("taiKhoan")} />
        {errors.taiKhoan && (
          <div className="alert alert-danger">{errors.taiKhoan.message}</div>
        )}
      </div>
      {/* Sử dụng khi UI component không hỗ trợ register */}
      <FormGroup>
        <Label>Mật Khẩu</Label>
        <Controller
          name="matKhau"
          control={control}
          defaultValue=""
          rules={{
            required: { value: true, message: "Mật khẩu không được để trống" },
          }}
          render={({ field }) => {
            return <Input {...field} />;
          }}
        />
        {errors.matKhau && (
          <Alert color="danger">{errors.matKhau.message}</Alert>
        )}
      </FormGroup>

      {error && <Alert color="danger">{error}</Alert>}

      <button className="btn btn-success">Đăng Nhập</button>
      <Link to="/" className="btn btn-primary ml-3">Trở lại Home</Link>
    </form>
  );
}
