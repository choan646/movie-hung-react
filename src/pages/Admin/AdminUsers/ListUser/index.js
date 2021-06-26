import React from "react";
import Button from "@material-ui/core/Button";

export default function ListUser({ data, handleDeleteUser, getUserSelected }) {
  return (
    <>
      {data?.items?.map((item, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{item?.taiKhoan}</td>
          <td>{item?.hoTen}</td>
          <td>{item?.email}</td>
          <td>{item?.soDt}</td>
          <td>{item?.maLoaiNguoiDung}</td>
          <td>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => getUserSelected(item)}
            >
              Sửa
            </Button>
          </td>
          <td>
            <Button
              variant="outlined"
              color="secondary"
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
