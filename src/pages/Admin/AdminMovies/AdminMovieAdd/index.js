import React from "react";
import { Alert, Button, FormGroup, Label, Modal } from "reactstrap";
import { ErrorMessage, Form, Field, Formik } from "formik";
import { addMovieSchema } from "src/redux/services/schema";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

export default function AdminMovieAdd({
  toggleModalMovie,
  modalMovie,
  handleAddMovie,
}) {
  return (
    <Modal isOpen={modalMovie} toggle={toggleModalMovie}>
      <Formik
        initialValues={{
          maPhim: Math.floor(Math.random() * 9900) + 100,
          tenPhim: "",
          biDanh: "",
          trailer: "",
          hinhAnh: "",
          moTa: "",
          maNhom: "GP11",
          ngayKhoiChieu: "2021-05-12T12:05",
          danhGia: 0,
        }}
        validationSchema={addMovieSchema}
        onSubmit={handleAddMovie}
        render={(formikProps) => (
          <Form className="form__addMovie row">
            <FormGroup className="col-6">
              <Label>Mã Phim</Label>
              <Field
                type="text"
                className="form-control"
                name="maPhim"
                onChange={formikProps.handleChange}
              />
              <ErrorMessage name="maPhim">
                {(msg) => <Alert color="danger">{msg}</Alert>}
              </ErrorMessage>
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
              <Label>Bí Danh</Label>
              <Field
                type="text"
                className="form-control"
                name="biDanh"
                onChange={formikProps.handleChange}
              />
              <ErrorMessage name="biDanh">
                {(msg) => <Alert color="danger">{msg}</Alert>}
              </ErrorMessage>
            </FormGroup>
            <FormGroup className="col-6">
              <Label>TraiLer <span style={{fontSize:12, color:"#f27b13"}}>( Ex : https://...)</span></Label>
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

            <FormGroup className="col-12">
              <Label>Ngày Khởi Chiếu</Label>
              <Field
                id="datetime-local"
                type="datetime-local"
                className="form-control"
                name="ngayKhoiChieu"
                onChange={formikProps.handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <ErrorMessage name="ngayKhoiChieu">
                {(msg) => <Alert color="danger">{msg}</Alert>}
              </ErrorMessage>
            </FormGroup>

            <FormGroup className="col-12">
              <Label>Hình Ảnh</Label>
              <Field
                type="file"
                className="form-control"
                name="hinhAnh"
                id="icon-button-file"
                accept="image/*"
                multiple
                // style={{ display: "none" }}
                onChange={formikProps.handleChange}
              />
              {/* <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label> */}
            </FormGroup>
            <FormGroup className="col-12">
              <Label>Mô Tả</Label>
              <Field
                className="form-control"
                name="moTa"
                as="textarea"
                onChange={formikProps.handleChange}
                style={{resize:"none"}}
                cols="30" rows="5"
              />
              <ErrorMessage name="moTa">
                {(msg) => <Alert color="danger">{msg}</Alert>}
              </ErrorMessage>
            </FormGroup>
            <FormGroup className="col-6">
              <Label>Đánh Giá</Label>
              <Field
                type="text"
                className="form-control"
                name="danhGia"
                onChange={formikProps.handleChange}
              />
              <ErrorMessage name="maPhim">
                {(msg) => <Alert color="danger">{msg}</Alert>}
              </ErrorMessage>
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

            <div
              className="col-12"
              style={{ marginTop: "50px", textAlign: "center" }}
            >
              <Button style={{ marginRight: "20px" }} color="primary">
                Thêm
              </Button>
              <Button color="danger" onClick={toggleModalMovie}>
                Hủy Bỏ
              </Button>
            </div>
          </Form>
        )}
      />
    </Modal>
  );
}
