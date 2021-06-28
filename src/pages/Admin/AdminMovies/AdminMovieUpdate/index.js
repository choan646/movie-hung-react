import { ErrorMessage, Form, Field, Formik } from "formik";
import React from "react";
import { Alert, FormGroup, Label, Modal } from "reactstrap";
import { addMovieSchema } from "src/redux/services/schema";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

export default function AdminMovieUpdate({
  data,
  toggleModalUpdateMovie,
  modalUpdateMovie,
  handleUpdateMovie,
}) {
  return (
    <Modal
      isOpen={modalUpdateMovie}
      toggle={toggleModalUpdateMovie}
      id="modalMovie"
    >
      <Formik
        initialValues={{
          hinhAnh: data.hinhAnh ? data.hinhAnh : {},
          maPhim: data.maPhim,
          tenPhim: data.tenPhim,
          trailer: data.trailer,
          moTa: data.moTa,
          maNhom: "GP11",
        }}
        validationSchema={addMovieSchema}
        enableReinitialize={true}
        onSubmit={handleUpdateMovie}
        render={(formikProps) => (
          <Form className="form__addMovie row">
            <FormGroup className="col-6">
              <Label>Mã Phim</Label>
              <Field
                type="text"
                className="form-control"
                name="maPhim"
                disabled
              />
            </FormGroup>
            <FormGroup className="col-6">
              <Label>Mã Nhóm</Label>
              <Field
                type="text"
                className="form-control"
                name="maNhom"
                disabled
              />
            </FormGroup>
            <FormGroup className="col-6">
              <Label>Tên Phim</Label>
              <Field
                type="text"
                className="form-control"
                name="tenPhim"
                onChange={formikProps.handleChange}
              />
              <ErrorMessage name="tenPhim">
                {(msg) => <Alert color="danger">{msg}</Alert>}
              </ErrorMessage>
            </FormGroup>
            <FormGroup className="col-6">
              <Label>
                TraiLer
                <span style={{ fontSize: 12, color: "#f27b13" }}>
                  ( Ex : https://...)
                </span>
              </Label>
              <Field
                type="text"
                className="form-control"
                name="trailer"
                onChange={formikProps.handleChange}
              />
              <ErrorMessage name="trailer">
                {(msg) => <Alert color="danger">{msg}</Alert>}
              </ErrorMessage>
            </FormGroup>

            <FormGroup className="col-6 mt-3">
              <Label
                htmlFor="icon-button-file"
                style={{ position: "relative" }}
              >
                Hình Ảnh
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  style={{ position: "absolute", top: "213px", left: "350px" }}
                  size="normal"
                >
                  <PhotoCamera style={{ fontSize: "40px" }} />
                </IconButton>
              </Label>
              <input
                id="icon-button-file"
                type="file"
                className="form-control form__add__img"
                name="hinhAnh"
                accept="image/*"
                style={{ display: "none" }}
                value={undefined}
                onChange={(event) => {
                  formikProps.setFieldValue("hinhAnh", event.target.files[0]);
                  console.log(event.target.files[0]);
                }}
              />
              <img
                src={data.hinhAnh}
                width="200px"
                height="250px"
                alt="hinhAnh"
                style={{ marginLeft: "150px", marginTop: "-24px" }}
              />
              <ErrorMessage name="hinhAnh">
                {(msg) => <Alert color="danger">{msg}</Alert>}
              </ErrorMessage>
            </FormGroup>
            <FormGroup className="col-12 mt-2">
              <Label>Mô Tả</Label>
              <Field
                className="form-control"
                name="moTa"
                as="textarea"
                onChange={formikProps.handleChange}
                style={{ resize: "none" }}
                rows="7"
              />
              <ErrorMessage name="moTa">
                {(msg) => <Alert color="danger">{msg}</Alert>}
              </ErrorMessage>
            </FormGroup>

            <div
              className="col-12"
              style={{ marginTop: "50px", textAlign: "center" }}
            >
              <Button
                style={{ marginRight: "40px" }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Sửa
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={toggleModalUpdateMovie}
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
