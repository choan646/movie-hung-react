import React from "react";
import { Table } from "reactstrap";
import Button from "@material-ui/core/Button";

export default function AllActionDatVe({
  listGheDangChon,
  handleDatGhe,
  handlePay,
  maLichChieu,
  userInfo,
}) {
  let tongTien = 0;
  let disabled = true;

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
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleDatGhe(item)}
                >
                  Xóa Ghế
                </Button>
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
              <Button
                variant="contained"
                color="primary"
                disabled={disabled}
                className="btn btn-success"
                onClick={() =>
                  handlePay(maLichChieu, listGheDangChon, userInfo.taiKhoan)
                }
              >
                Thanh Toán
              </Button>
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}
