import axios from "axios";
import qs from "qs";
import Swal from "sweetalert2";

const axiosClient = axios.create({
  baseURL: "https://movie0706.cybersoft.edu.vn/api",
  //Tự cấu hình cách lấy param mặc định của axios
  //Bỏ qua giá trị null và undefined trong params
  paramsSerializer: (params) => qs.stringify(params, { skipNulls: true }),
});
axiosClient.interceptors.request.use(
  (config) => {
    //Xử lý trước khi request được gửi lên server
    //Thêm authorization vào header
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      const { accessToken } = JSON.parse(userInfo);
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    //Xử ly' khi request bị lỗi
    return Promise.reject(error);
  }
);
axiosClient.interceptors.response.use(
  (response) => {
    //Xử lý kết quả trả về từ Server
    return response;
  },
  //Xử lý nếu kết quả trả về bị lỗi
  (error) => {
    if (error.status === 401) {
      console.log("Lỗi 401");
    }
    if (error.status === 500) {
      //Xu ly thong bao cho nguoi dung dang co loi~ tu server
      Swal.fire({
        icon: "warning",
        title: "Lỗi server! Hãy thử lại sau",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Đồng ý",
      });
    }
    if (error.status === 404) {
      Swal.fire({
        icon: "warning",
        title: "Không thể thực hiện hành động này!",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Đồng ý",
      });
    }
    return Promise.reject(error);
  }
);
export default axiosClient;
