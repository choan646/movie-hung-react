import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { register } from "src/redux/actions/auth";
import  RegisterModal from "./RegisterModal";


export default function Register() {
  const dispatch = useDispatch();
  const { userInfo, isLoading, error } = useSelector((state) => state.auth);

  const handleRegister = (values) => {
    dispatch(register(values));
  };

  if (userInfo) {
    return <Redirect to="/" />;
  }



  return (
    <div
      id="register"
      style={{
        backgroundImage: "url('/img/bg2.jpg')",
        backgroundSize: "contain",
      }}
    >
      <RegisterModal handleRegister={handleRegister} />
    </div>
  );
}
