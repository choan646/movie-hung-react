import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

export default function ModalInfoHeader({modalInfo,toggleModalInfo}) {
  return (
    <div>
      <Modal id="modalInfo" isOpen={modalInfo} toggle={toggleModalInfo}>
        <ModalBody>
          {/* FORM */}
          abc
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModalInfo}>
            Chỉnh Sửa Thông Tin
          </Button>
          <Button color="danger" onClick={toggleModalInfo}>
            Thoát
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
