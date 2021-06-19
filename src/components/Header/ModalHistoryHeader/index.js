import React from "react";
import { Button, Modal, ModalBody, ModalFooter, Table } from "reactstrap";

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
                  <h3><i>Không Có Lịch Sử Đặt Chỗ !</i></h3>
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
                            <Button color="warning">Xóa Lịch</Button>
                          </td>
                          {/* Cái này để lấy ra số ghế đã đặt */}
                          {/* <td>
                            {item.danhSachGhe?.map((dsg, indexDsg) => {
                              console.log(dsg);
                              return <p>{indexDsg + 1}</p>;
                            })}
                          </td>  */}
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
          <Button color="danger" onClick={toggleModalHistory}>
            Thoát
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
