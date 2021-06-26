import React from "react";
import { Alert, FormGroup, Label, Modal } from "reactstrap";
import { ErrorMessage, Form, Field, Formik } from "formik";
import { addMovieSchema } from "src/redux/services/schema";
import Button from "@material-ui/core/Button";

export default function AdminMovieAdd({
  toggleModalMovie,
  modalMovie,
  handleAddMovie,
}) {
  return (
    <Modal isOpen={modalMovie} toggle={toggleModalMovie} id="modalMovie">
      <Formik
        initialValues={{
          hinhAnh: {},
          maPhim: "Issued by the server",
          tenPhim: "",
          trailer: "",
          moTa: "",
          maNhom: "GP11",
        }}
        validationSchema={addMovieSchema}
        enableReinitialize={true}
        onSubmit={handleAddMovie}
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

            <FormGroup className="col-12">
              <Label>Hình Ảnh</Label>
              <Field
                type="file"
                className="form-control form__add__img"
                name="hinhAnh"
                accept="image/*"
                value={undefined}
                onChange={(event) => {
                  formikProps.setFieldValue("hinhAnh", event.target.files[0]);
                }}
              />
              <ErrorMessage name="hinhAnh">
                {(msg) => <Alert color="danger">{msg}</Alert>}
              </ErrorMessage>
            </FormGroup>
            <FormGroup className="col-12">
              <Label>Mô Tả</Label>
              <Field
                className="form-control"
                name="moTa"
                as="textarea"
                onChange={formikProps.handleChange}
                style={{ resize: "none" }}
                rows="5"
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
                Thêm
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={toggleModalMovie}
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
// value của field này object nên phải để value={}
// link bài viết cho value https://stackoverflow.com/questions/66876022/setfieldvalue-formik-and-invalidstateerror-failed-to-set-the-value-property
