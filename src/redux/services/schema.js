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
export const addUserSchema = yup.object().shape({
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

//Add movie //Update Movie
export const addMovieSchema = yup.object().shape({
  // maPhim: yup
  //   .string()
  //   .required("Mã Phim không được bỏ trống")
  //   .matches(/^[0-9]+$/)
  //   .min(3, "Mã Phim phải từ 3 số trở lên")
  //   .max(4, "Mã Phim chỉ tối đa 4 số"),
  tenPhim: yup
    .string()
    .required("Tên Phim không được bỏ trống")
    .min(2, "Tên Phim phải từ 2 ký tự trở lên")
    .max(50, "Tên Phim tối đa 50 ký tự"),

  trailer: yup
    .string()
    .required("Trailer không được bỏ trống")
    .min(5, "Trailer phải có hơn 5 ký tự"),
  moTa: yup
    .string()
    .required("Mô Tả không được bỏ trống")
    .min(5, "Mô Tả phải từ 5 ký tự trở lên")
    .max(200, "Mô Tả tối đa 200 ký tự"),
  hinhAnh: yup.mixed().required("Phải chọn file hình ảnh!"),
});

//Search at AdminCinema
export const searchIdMovieAtAdmin = yup.object().shape({
  maPhim: yup
    .string()
    .min(4, "Mã Phim phải có 4 ký tự")
    .matches(/^[0-9]+$/),
});

//add Showtimes
export const addShowTimes = yup.object().shape({
  ngayChieuGioChieu: yup
    .string()
    .required("Ngày Khởi Chiếu không được để trống"),
  maRap: yup
    .string()
    .required("Mã Rạp không được để trống")
    .matches(/^[0-9]+$/)
    .min(2, "Mã Rạp phải có 2 ký tự trở lên")
    .max(5, "Mã Rạp tối đa 5 ký tự"),
  giaVe: yup.string().required("Giá Vé không được để trống"),
});
