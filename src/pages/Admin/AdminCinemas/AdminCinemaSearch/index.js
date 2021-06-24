import React from 'react'
import { searchIdMovieAtAdmin } from "src/redux/services/schema";
import { Alert, Button, FormGroup, Label } from "reactstrap";
import { ErrorMessage, Form, Field, Formik } from "formik";


export default function AdminCinemaSearch({handleSearchIdMovie, data}) {
    return (
        <div className="cinemaAdmin__search" style={{ marginLeft: "35%", marginBottom: "30px", marginTop: "-45px" }}>
          <Formik
            initialValues={{ maPhim: "" || data?.maPhim}}
            validationSchema={searchIdMovieAtAdmin}
            onSubmit={handleSearchIdMovie}
            render={(formikProps) => (
              <Form className="form__search d-flex">
                <FormGroup className="d-flex">
                  <Label style={{marginTop:"5px"}}>Nhập mã phim</Label>
                  <Field
                    type="text"
                    className="form-control"
                    name="maPhim"
                    onChange={formikProps.handleChange}
                    style={{width: '200px', marginLeft:"10px"}}
                  />
                  <ErrorMessage name="maPhim">
                    {(msg) => <Alert color="danger">{msg}</Alert>}
                  </ErrorMessage>
                </FormGroup>
                <Button style={{backgroundColor:"#f27b13", width:"80px", height:"38px", marginLeft:"10px", border: "none"}}>Search</Button>
              </Form>
            )}
          />
        </div>
    )
}
