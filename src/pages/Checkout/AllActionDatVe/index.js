import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
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
    <TableContainer component={Paper} className="form__booking">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>STT</TableCell>
            <TableCell align="center">Mã Ghế</TableCell>
            <TableCell align="center">Giá Vé</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listGheDangChon?.map((item, index) => (
            <TableRow key={item.maGhe}>
              {/* Làm theo cách này và không làm theo reduce tính tổng vì có thể control được nút thanh toán nếu tongTien == 0 */}
              <TableCell style={{ display: "none" }}>
                {(tongTien = Number(tongTien) + Number(item.giaVe))}
              </TableCell>

              <TableCell>{index + 1}</TableCell>
              <TableCell align="center">{item.tenGhe}</TableCell>
              <TableCell align="center">
                {item.giaVe.toLocaleString()}
              </TableCell>
              <td
                align="center"
                style={{ borderBottom: "1px solid rgba(224, 224, 224, 1)" }}
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleDatGhe(item)}
                >
                  Xóa Ghế
                </Button>
              </td>
            </TableRow>
          ))}
          <TableRow>
            <TableCell
              colSpan={2}
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "18px",
                letterSpacing: "2px",
                border: "none",
                paddingTop: "30px",
              }}
            >
              Tổng Tiền
            </TableCell>
            <TableCell
              align="center"
              style={{ border: "none", paddingTop: "30px" }}
            >
              {tongTien.toLocaleString()}
            </TableCell>
            <td align="center" style={{ border: "none", paddingTop: "30px" }}>
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
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
