import React from "react";
import { Modal, ModalBody, ModalFooter, Table } from "reactstrap";
import Button from "@material-ui/core/Button";

export default function ModalHistoryHeader({
  data,
  modalHistory,
  toggleModalHistory,
}) {
  const check = data?.thongTinDatVe.every(function (condition) {
    return condition > 0;
  });
  return (
    <div>
      <Modal
        id="modalBooking"
        isOpen={modalHistory}
        toggle={toggleModalHistory}
      >
        <ModalBody>
          <h1>Lịch Sử Đặt Vé</h1>
          <div className="allInfo__booking row">
            <p className="col-6">
              <b>Tên Người Dùng : </b>
              {data?.hoTen}
            </p>
            <p className="col-6">
              <b>Email : </b>
              {data?.email}
            </p>

            <div className="allInfo__booking__content col-12">
              {check ? (
                <div className="allInfo__booking__null">
                  <h3>
                    <i>Không Có Lịch Sử Đặt Chỗ !</i>
                  </h3>
                </div>
              ) : (
                <div className="allInfo__booking__detail">
                  <Table>
                    <thead>
                      <tr>
                        <th>Mã Vé</th>
                        <th>Tên Phim</th>
                        <th>Thời Lượng Phim</th>
                        <th>Ngày Đặt</th>
                        <th>Giá Vé</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.thongTinDatVe.map((item, index) => (
                        <tr key={index}>
                          <td>{item.maVe}</td>
                          <td>{item.tenPhim}</td>
                          <td>{item.thoiLuongPhim} Phút</td>
                          <td>
                            {item.ngayDat.substring(8, 10) +
                              "/" +
                              item.ngayDat.substring(5, 7) +
                              "/" +
                              item.ngayDat.substring(0, 4)}
                          </td>
                          <td>{item.giaVe} VNĐ</td>
                          <td>
                            <Button
                              variant="outlined"
                              style={{
                                color: "#f27b13",
                                borderColor: "#f27b13",
                                textTransform:"none"
                              }}
                            >
                              Xóa Lịch
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )}
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="contained"
            color="secondary"
            onClick={toggleModalHistory}
            style={{marginBottom:"10px", marginRight:"30px"}}
          >
            Thoát
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
