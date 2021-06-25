import React from "react";
import { Alert, FormGroup, Label, Modal } from "reactstrap";
import { ErrorMessage, Form, Field, Formik } from "formik";
import { addShowTimes } from "src/redux/services/schema";
import Button from "@material-ui/core/Button";

export default function AdminCinemaAdd({
  data,
  modalCinema,
  toggleModalCinema,
  handleAddShowTime,
}) {
  return (
    <Modal isOpen={modalCinema} toggle={toggleModalCinema}>
      <Formik
        initialValues={{
          maPhim: data?.maPhim,
          ngayChieuGioChieu: "12/05/2021",
          maRap: "",
          giaVe: "",
        }}
        validationSchema={addShowTimes}
        onSubmit={handleAddShowTime}
        render={(formikProps) => (
          <Form className="form__addShowTimes row">
            <FormGroup className="col-6" style={{ marginTop: "20px" }}>
              <Label>Mã Phim</Label>
              <Field
                type="text"
                className="form-control"
                name="maPhim"
                disabled
                style={{ marginTop: "14px" }}
              />
            </FormGroup>
            <FormGroup className="col-6">
              <Label>
                Ngày Khởi Chiếu
                <p style={{ fontSize: 12, color: "#f27b13" }}>
                  ( Ex : 2021-05-12T00:00:00)
                </p>
              </Label>
              <Field
                type="text"
                className="form-control"
                name="ngayChieuGioChieu"
                onChange={formikProps.handleChange}
              />
              <ErrorMessage name="ngayChieuGioChieu">
                {(msg) => <Alert color="danger">{msg}</Alert>}
              </ErrorMessage>
            </FormGroup>
            <FormGroup className="col-6">
              <Label>Mã Rạp</Label>
              <Field
                type="text"
                className="form-control"
                name="maRap"
                onChange={formikProps.handleChange}
              />
              <ErrorMessage name="maRap">
                {(msg) => <Alert color="danger">{msg}</Alert>}
              </ErrorMessage>
            </FormGroup>
            <FormGroup className="col-6">
              <Label>Giá Vé</Label>
              <Field
                type="text"
                className="form-control"
                name="giaVe"
                onChange={formikProps.handleChange}
              />
              <ErrorMessage name="giaVe">
                {(msg) => <Alert color="danger">{msg}</Alert>}
              </ErrorMessage>
            </FormGroup>
            <div
              className="col-12"
              style={{ marginTop: "30px", textAlign: "center" }}
            >
              <Button
                style={{ marginRight: "20px" }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Thêm
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={toggleModalCinema}
              >
                Hủy Bỏ
              </Button>
            </div>
          </Form>
        )}
      />
    </Modal>
  );
}
