import React from "react";
import { Table } from "reactstrap";

export default function AllActionDatVe() {
  return (
    <div className="form__booking">
      <Table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã Ghế</th>
            <th>Giá Vé</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>123</td>
                <td>123</td>
                <td>
                    <button className="btn btn-danger">Xóa Ghế</button>
                </td>
            </tr>
            <tr>
                <td>1</td>
                <td>123</td>
                <td>123</td>
                <td>
                    <button className="btn btn-danger">Xóa Ghế</button>
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th colspan="2" style={{textAlign:"center"}}>Tổng Tiền</th>
                <td>246</td>
                <td>
                    <button className="btn btn-success">
                        Thanh Toán
                    </button>
                </td>
            </tr>
        </tfoot>
      </Table>
      {/* <p>
        Khi Đặt Vé thì mọi thông tin sẽ được load lại ở đây, vì dụ như là mã ghế
        đã đặt -- giá tiền, tổng tiền, nút xóa từng chỗ, nút đồng ý đặt sau khi
        chọn xong hết{" "}
      </p> */}
    </div>
  );
}
