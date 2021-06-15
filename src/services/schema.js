import * as yup from "yup";
// Tạo schame validation
// Login
export const loginSchema = yup.object().shape({
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
  });

//Register
export const registerUserSchema = yup.object().shape({
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
//Update 
export const updateSchema = yup.object().shape({
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

  //Add-user
  export const addUserSchema =yup.object().shape({
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

  })