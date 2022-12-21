import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./formInput.css";
import PropTypes from "prop-types";
function FormInput({ onChange, errorMessage, ...inputProps }) {
  const [focused, setFocused] = useState(false);
  const [hide, setHide] = useState(false);

  const toggle = () => {
    setHide((prev) => !prev);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <div className="inputLine">
        <input
          {...inputProps}
          type={
            inputProps.type === "password"
              ? !hide
                ? "password"
                : "text"
              : inputProps.type
          }
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmpassword" && setFocused(true)
          }
          focused={focused.toString()}
          className="input-placeholder input-app"
        />

        {inputProps.name === "password" ||
        inputProps.name === "confirmpassword" ? (
          !hide ? (
            <FontAwesomeIcon
              className="hideIcon"
              icon={faEye}
              onClick={toggle}
            />
          ) : (
            <FontAwesomeIcon
              className="hideIcon"
              icon={faEyeSlash}
              onClick={toggle}
            />
          )
        ) : (
          <></>
        )}
        <br></br>
        <span className="error-span">{errorMessage}</span>
      </div>
    </div>
  );
}

FormInput.propTypes = {
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
};
export default FormInput;
