import { ErrorMessage, Form, Field, Formik } from "formik";
import React from "react";
import { Alert, Button, FormGroup, Label, Modal, ModalBody } from "reactstrap";
import { updateSchema } from "src/redux/services/schema";


export default function ModalInfoHeader({ data,handleChangeInfoHome, modalInfo, toggleModalInfo }) {
  return (
    <div>
      <Modal id="modalInfo" isOpen={modalInfo} toggle={toggleModalInfo}>
        <ModalBody>
          <Formik
            initialValues={{
              taiKhoan: data.taiKhoan,
              matKhau: data.matKhau? data.matKhau : "",
              email: data.email,
              soDt: data.soDT,
              maNhom: "GP11",
              maLoaiNguoiDung: data.maLoaiNguoiDung,
              hoTen: data.hoTen,
            }}
            validationSchema={updateSchema}
            onSubmit={handleChangeInfoHome}
            render={(formikProps) => (
              <Form className="form__UpdateUser row">
                <FormGroup className="col-6">
                  <Label>Tài Khoản </Label>
                  <Field
                    type="text"
                    className="form-control"
                    name="taiKhoan"
                    disabled
                  />
                </FormGroup>
                <FormGroup className="col-6">
                  <Label>Mã Nhóm </Label>
                  <Field
                    className="form-control"
                    disabled
                    value="GP11"
                    name="maNhom"
                  />
                </FormGroup>
                <FormGroup className="col-6">
                  <Label>Mật Khẩu </Label>
                  <Field
                    type="password"
                    className="form-control"
                    name="matKhau"
                    onChange={formikProps.handleChange}
                  />
                  <ErrorMessage name="matKhau">
                    {(msg) => <Alert color="danger">{msg}</Alert>}
                  </ErrorMessage>
                </FormGroup>
                <FormGroup className="col-6">
                  <Label>Họ Tên </Label>
                  <Field
                    type="text"
                    className="form-control"
                    name="hoTen"
                    onChange={formikProps.handleChange}
                  />
                  <ErrorMessage name="hoTen">
                    {(msg) => <Alert color="danger">{msg}</Alert>}
                  </ErrorMessage>
                </FormGroup>

                <FormGroup className="col-6">
                  <Label>Số Điện Thoại </Label>
                  <Field
                    type="text"
                    className="form-control"
                    name="soDt"
                    onChange={formikProps.handleChange}
                  />
                  <ErrorMessage name="soDt">
                    {(msg) => <Alert color="danger">{msg}</Alert>}
                  </ErrorMessage>
                </FormGroup>

                <FormGroup className="col-6">
                  <Label>Mã Loại Người Dùng</Label>
                  <Field
                    className="form-control"
                    name="maLoaiNguoiDung"
                    disabled
                 />
                </FormGroup>
                <FormGroup className="col-12">
                  <Label>Email </Label>
                  <Field
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={formikProps.handleChange}
                  />
                  <ErrorMessage name="email">
                    {(msg) => <Alert color="danger">{msg}</Alert>}
                  </ErrorMessage>
                </FormGroup>
                <div
                  className="col-12"
                  style={{ marginTop: "50px", textAlign: "center" }}
                >
                  <Button style={{ marginRight: "20px" }} color="primary">
                    Chỉnh Sửa
                  </Button>
                  <Button color="danger" onClick={toggleModalInfo}>
                    Hủy Bỏ
                  </Button>
                </div>
              </Form>
            )}
          />
        </ModalBody>
      </Modal>
    </div>
  );
}
