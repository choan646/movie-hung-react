import { ErrorMessage, Form, Field, Formik } from "formik";
import React from "react";
import { Alert, Button, FormGroup, Label, Modal } from "reactstrap";
import { updateSchema } from "src/services/schema";

export default function AdminUsersModalUpdate({
  data,
  toggleUpdateUser,
  modalUpdateUser,
  handleUpdateUser,
}) {
  return (
    <>
      {data.items?.map((item) => {
        <Modal isOpen={modalUpdateUser} toggle={toggleUpdateUser}>
          <Formik
            initialValues={{
              taiKhoan: item.taiKhoan,
              matKhau: item.matKhau,
              email: item.email,
              soDt: item.soDt,
              maNhom: "GP11",
              maLoaiNguoiDung: item.maLoaiNguoiDung,
              hoTen: item.hoTen,
            }}
            validationSchema={updateSchema}
            onSubmit={handleUpdateUser}
            onClick={toggleUpdateUser}
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
                    component="select"
                    className="form-control"
                    name="maLoaiNguoiDung"
                    onChange={formikProps.handleChange}
                  >
                    <option value="KhachHang">Khách Hàng</option>
                    <option value="QuanTri">Quản Trị</option>
                  </Field>
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
                  <Button color="danger" onClick={toggleUpdateUser}>
                    Hủy Bỏ
                  </Button>
                </div>
              </Form>
            )}
          />
        </Modal>;
      })}
    </>
  );
}
