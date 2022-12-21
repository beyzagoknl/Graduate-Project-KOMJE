import React, { useState, useEffect } from "react";
import FormInput from "../InputForm/FormInput.jsx";
import "./LoginForm.css";
import { useAuth } from "../../hooks/useAuth.jsx";

//import ErrorMsg from "../ErrorMsg/ErrorMsg.jsx";
import Spinner from "../Spinner/Spinner.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const REMEMBER_ME = "REMEMBER_ME";

const LoginForm = () => {
  const [values, setValues] = useState({
    username: "",
    email: localStorage.getItem(REMEMBER_ME) || "",
    password: "",
    confirmPassword: "",
  });
  const { login } = useAuth();
  const { isLoading, error, performLogin, cancelFetch, isSuccess } = login;
  const [checked, setChecked] = useState(
    localStorage.getItem(REMEMBER_ME) !== null
  );

  useEffect(() => {
    if (error) {
      toast.error("Either e-mail or password is incorrect.", {
        toastId: "login-error",
      });
    }
    if (isSuccess) {
      toast.success("Great, you logged in!.", {
        toastId: "login-success",
      });
    }
    return cancelFetch;
  }, [error, isSuccess, cancelFetch]);

  const inputs = [
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and contain at least 1 uppercase,1 lowercase, 1 number and 1 special character!",
      pattern:
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,20}$",
      required: true,
    },
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem(REMEMBER_ME, values.email);
    performLogin({
      email: values.email,
      password: values.password,
    });
  };

  const handleChangeCheckBox = () => {
    setChecked((checked) => !checked);
    if (checked) {
      localStorage.removeItem(REMEMBER_ME);
    } else {
      localStorage.setItem(REMEMBER_ME, values.email);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer />
      <div className="login-box form-app">
        <div className="loginPage-form-box">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2 className="log-title title-app">Login</h2>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
                errorMessage={input.errorMessage}
              />
            ))}

            <div className="remember-box ">
              <div>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={handleChangeCheckBox}
                  className="input-check-box"
                />
                <label className="remeber-me">Remember me</label>
              </div>
            </div>
            <div className="btn-box ">
              <button className="log-in-btn btn-app" disabled={isLoading}>
                Login
              </button>
            </div>
            <div className="login-labels">
              <label className="new-account-link ">
                Do not have an account? Please register{" "}
                <a href="/register"> here!</a>
              </label>
              <label className="new-account-link ">
                Forgot your password? Please click{" "}
                <a href="/forgotPassword">here!</a>
              </label>
            </div>
          </form>
        </div>
        {isLoading ? <Spinner /> : <></>}
      </div>
    </>
  );
};

export default LoginForm;
