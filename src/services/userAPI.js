import axiosClient from './axiosClient'

const userAPI = {
    getUser:()=>{
        return axiosClient.get("QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP11");
    }
}
export default userAPI;