import React from "react";
import { ErrorMessage, Form, Field, Formik } from "formik";
import { Alert, FormGroup, Label, Modal } from "reactstrap";
import { addUserSchema } from "src/redux/services/schema";
import Button from "@material-ui/core/Button";

export default function AdminUsersModalAdd({
  handleAddUser,
  modalUser,
  toggleModalUser,
}) {
  return (
    <Modal isOpen={modalUser} toggle={toggleModalUser} id="modalUser">
      <Formik
        initialValues={{
          taiKhoan: "",
          matKhau: "",
          email: "",
          soDt: "",
          maNhom: "GP11",
          maLoaiNguoiDung: "KhachHang",
          hoTen: "",
        }}
        validationSchema={addUserSchema}
        onSubmit={handleAddUser}
        render={(formikProps) => (
          <Form className="form__addUser row">
            <FormGroup className="col-6">
              <Label>Tài Khoản </Label>
              <Field
                type="text"
                className="form-control"
                name="taiKhoan"
                onChange={formikProps.handleChange}
              />
              <ErrorMessage name="taiKhoan">
                {(msg) => <Alert color="danger">{msg}</Alert>}
              </ErrorMessage>
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

            <FormGroup className="col-6">
              <Label>Mã Loại Người Dùng</Label>
              <Field
                component="select"
                className="form-control"
                name="maLoaiNguoiDung"
                onChange={formikProps.handleChange}
              >
                <option value="KhachHang">Khách Hàng</option>
                <option value="QuanTri">Quản Trị</option>
              </Field>
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
                onClick={toggleModalUser}
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
