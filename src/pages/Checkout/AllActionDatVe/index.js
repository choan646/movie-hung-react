import React from "react";
import { Table } from "reactstrap";

export default function AllActionDatVe({
  listGheDangChon,
  handleDatGhe,
  handlePay,
  maLichChieu,
  userInfo,
}) {
  let tongTien = 0;
  let disabled = true;
  // if(tongTien == 0) {
  //   disabled = false;
  // }

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
          {listGheDangChon?.map((item, index) => (
            <tr key={item.maGhe}>
              {/* Làm theo cách này và không làm theo reduce tính tổng vì có thể control được nút thanh toán nếu tongTien == 0 */}
              <td style={{ display: "none" }}>
                {(tongTien = Number(tongTien) + Number(item.giaVe))}
              </td>

              <td>{index + 1}</td>
              <td>{item.tenGhe}</td>
              <td>{item.giaVe.toLocaleString()}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDatGhe(item)}
                >
                  Xóa Ghế
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colspan="2" style={{ textAlign: "center" }}>
              Tổng Tiền
            </th>

            <td>{tongTien}</td>
            <td>
              {tongTien == 0 ? (disabled = true) : (disabled = false)}
              <button
                disabled={disabled}
                className="btn btn-success"
                onClick={() =>
                  handlePay(maLichChieu, listGheDangChon, userInfo.taiKhoan)
                }
              >
                Thanh Toán
              </button>
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}
