import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AdminUserUpdate from "./AdminUserUpdate";

export default function ListUser({ data, handleDeleteUser ,handleUpdateUser,modalUser,toggleModalUser}) {

  const handleTest = (item) => {
    toggleModalUser();
    console.log(item)
  }
  return (
    <>
      {data.items?.map((item, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{item.taiKhoan}</td>
          <td>{item.hoTen}</td>
          <td>{item.email}</td>
          <td>{item.soDt}</td>
          <td>{item.maLoaiNguoiDung}</td>
          <td>
            <Button variant="outlined" color="primary" onClick={()=>handleTest(item)}>
            {/* toggleModalUser */}
            {/* ()=>handleUpdateUser(item) */}
              Sửa
            </Button>
            <AdminUserUpdate data={item} handleUpdateUser={handleUpdateUser} modalUser={modalUser} toggleModalUser={toggleModalUser}/>

          </td>
          <td>
            <Button
              variant="outlined" color="secondary"
              onClick={() => handleDeleteUser(item.taiKhoan)}
            >
              Xóa
            </Button>
          </td>
        </tr>
      ))}
    </>
  );
}
