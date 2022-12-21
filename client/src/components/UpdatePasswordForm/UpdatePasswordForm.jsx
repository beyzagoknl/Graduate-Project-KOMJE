import React, { useState } from "react";
import FormInput from "../InputForm/FormInput";
import useFetch from "../../hooks/useFetch.js";
import PropTypes from "prop-types";
import Spinner from "../Spinner/Spinner";
const UpdatePasswordForm = ({ userId, token }) => {
  const [message, setMessage] = useState(null);
  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern:
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,20}$",
      required: true,
    },
    {
      id: 2,
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password and confirm password must be match.",
      pattern: values.password,
      required: true,
    },
  ];
  const route = `/user/${userId}/reset/${token}`;
  const onReceived = (result) => {
    setMessage(result.message);
  };
  const { isLoading, error, performFetch } = useFetch(route, onReceived);
  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        password: values.password,
      }),
    };
    performFetch(options);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="verify-container">
      <div className="verify-box">
        <h1 className="verify-header">Reset your password!</h1>
        <p className="verify-text">
          Enter your new password below and confirmed it.
        </p>
        <form className="verify-form" onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
              errorMessage={input.errorMessage}
            />
          ))}
          <button
            type="submit"
            className="btn btn-outline-primary send-link-btn"
          >
            Update
          </button>
          {isLoading && <Spinner />}
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          {message && (
            <div>
              <div className="alert alert-success" role="alert">
                {message}
              </div>
              <p>
                Try to <a href="/login">login</a> now with new password{" "}
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
UpdatePasswordForm.propTypes = {
  userId: PropTypes.string,
  token: PropTypes.string,
};
export default UpdatePasswordForm;
