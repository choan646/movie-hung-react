import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";

export default function ModalHistoryHeader({
  data,
  modalHistory,
  toggleModalHistory,
}) {
  const check = data?.thongTinDatVe.every(function (condition){
    return condition > 0;
  })
  console.log(check,data?.thongTinDatVe)
  return (
    <div>
      <Modal id="modalInfo" isOpen={modalHistory} toggle={toggleModalHistory}>
        <ModalBody>
          <h1>Lịch Sử Đặt Vé</h1>
          <div className="allInfo__booking">
            <p>
              <b>Tên Người Dùng : </b>
              {data?.hoTen}
            </p>
            <p>
              <b>Email : </b>
              {data?.email}
            </p>
            
            <div className="allInfo__booking__content">
              {check? <div className="allInfo__booking__null">
                <h4>Không Có Lịch Sử Đặt Chỗ</h4>
              </div>: <div className="allInfo__booking__detail">
                <p>cái lol gi day</p></div>}
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
