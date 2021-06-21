import React, { useState } from "react";
import { Button } from "reactstrap";

export default function ListUser({ data, handleDeleteUser }) {
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
            <Button color="secondary">
              Sửa
            </Button>
          </td>
          <td>
            <Button
              color="danger"
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
