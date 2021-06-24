import React from "react";
import { Button, Modal} from 'reactstrap';

export default function AdminCinemaAdd({
  modalCinema,
  toggleModalCinema,
  handleAddShowTime,
}) {
  return (
    <Modal isOpen={modalCinema} toggle={toggleModalCinema} >
    <p>abc</p>
  </Modal>
  );
}
