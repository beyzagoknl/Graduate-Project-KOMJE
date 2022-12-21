import React, { useState, useEffect } from "react";
import FormInput from "../InputForm/FormInput";
import useFetch from "../../hooks/useFetch";
import Spinner from "../Spinner/Spinner";
import "./VerifyEmailForm.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const VerifyEmailForm = () => {
  const [value, setValue] = useState({
    email: "",
  });
  const [message, setMessage] = useState(null);
  const onReceived = (result) => {
    setMessage(result.message);
  };
  const route = "/user/forgotPassword";
  const { isLoading, error, performFetch, isSuccess } = useFetch(
    route,
    onReceived
  );
  const input = {
    id: 1,
    name: "email",
    type: "email",
    placeholder: "Your email address",
    errorMessage: "Please enter a valid email address.",
    required: true,
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: value.email,
      }),
    };
    performFetch(options);
  };
  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleResendEmail = (e) => {
    handleSubmit(e);
  };

  useEffect(() => {
    if (error) {
      toast.error(message, {
        toastId: "mail-error",
      });
    }
    if (isSuccess) {
      toast.success(message, {
        toastId: "mail-success",
      });
    }
  }, [error, isSuccess]);
  return (
    <div className="verify-container">
      <ToastContainer />

      <div className="verify-box form-app">
        <h1 className="verify-header">Forgot your password?</h1>
        <p className="verify-text">
          Do not worry, enter your registered email to reset your password and
          click reset button.
        </p>
        <form className="verify-form" onSubmit={handleSubmit}>
          <FormInput
            key={input.id}
            {...input}
            value={value[input.name]}
            onChange={onChange}
            errorMessage={input.errorMessage}
          />
          <div className="btn-box">
            <button type="submit" className="btn-app  send-link-btn">
              Reset
            </button>
          </div>
        </form>
        <div>
          {isLoading && <Spinner />}

          {message && (
            <div className="btn-box">
              <button
                className="resend-email-button btn-app "
                onClick={handleResendEmail}
              >
                Resend e-mail
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailForm;
