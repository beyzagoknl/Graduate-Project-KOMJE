import React from "react";
import { useParams } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.css";
import VerifyEmail from "../../components/VerifyAccount/VerifyEmail";

const Login = () => {
  const { userId, token } = useParams();
  if (userId && token) {
    return (
      <div className="login-page-main-container">
        <VerifyEmail userId={userId} token={token} />
        <LoginForm />
      </div>
    );
  } else {
    return (
      <div className="login-page-main-container">
        <LoginForm />
      </div>
    );
  }
};

export default Login;
