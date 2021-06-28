import React from "react";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function AdminHome() {
  const styleBoder = { borderTop: "1px dashed rgba(224, 224, 224, 1)" };
  return (
    <div className="adminHome">
      <div className="adminHome__linkTo">
        <p>
          <Link to="/admin/home">Home</Link> / Trang Chính
        </p>
      </div>
      <div
        className="adminHome__content row"
        style={{ width: "90%", margin: "auto", marginTop: 70 }}
      >
        <div className="adminHome__statistical col-7">
          <TableContainer component={Paper}>
            <img
              src="/img/chien-luoc-marketing-cgv.jpg"
              width="100%"
              height="400px"
              alt="hinhAnh"
            />
          </TableContainer>
        </div>

        <div className="adminHome__activity col-5">
          <TableContainer
            component={Paper}
            style={{
              padding: "20px 50px",
              marginBottom: "20px",
              overflowY: "scroll",
              height: "400px",
            }}
          >
            <h5
              style={{
                textAlign: "center",
                marginBottom: "30px",
                color: "#f27b13",
              }}
            >
              * <i>Hoạt động gần đây</i> *
            </h5>
            <Table aria-label="simple table">
              <TableRow style={styleBoder}>
                <p>Quản trị viên choanh646 vừa thay đổi thông tin.</p>
              </TableRow>
              <TableRow style={styleBoder}>
                <p>
                  <b>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis impedit aperiam expedita accusamus.
                  </b>
                </p>
              </TableRow>
              <TableRow style={styleBoder}>
                <p>
                  <b>Người dùng choanh646 vừa đặt vé xem phim.</b>
                </p>
              </TableRow>
              <TableRow style={styleBoder}>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis impedit aperiam expedita accusamus.
                </p>
              </TableRow>
              <TableRow style={styleBoder}>
                <p>
                  <b>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis impedit aperiam expedita accusamus.
                  </b>
                </p>
              </TableRow>
              <TableRow style={styleBoder}>
                <p>Người dùng choanh646 vừa đặt vé xem phim.</p>
              </TableRow>
              <TableRow style={styleBoder}>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis impedit aperiam expedita accusamus.
                </p>
              </TableRow>
              <TableRow style={styleBoder}>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis impedit aperiam expedita accusamus.
                </p>
              </TableRow>
              <TableRow style={styleBoder}>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis impedit aperiam expedita accusamus.
                </p>
              </TableRow>
              <TableRow style={styleBoder}>
                <p>Người dùng choanh646 vừa đặt vé xem phim.</p>
              </TableRow>
              <TableRow style={styleBoder}>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis impedit aperiam expedita accusamus.
                </p>
              </TableRow>
              <TableRow style={styleBoder}>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis impedit aperiam expedita accusamus. Lorem ipsum dolor
                  sit, amet consectetur adipisicing elit. Facilis, error.
                </p>
              </TableRow>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
