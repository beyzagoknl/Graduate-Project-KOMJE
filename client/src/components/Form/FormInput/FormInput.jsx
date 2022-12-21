import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, value, required, errorMessage, onChange, ...inputProps } =
    props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div key={inputProps.key} className="event-line">
      <label className="event-line-title">
        {label}
        {required && <span>(required)</span>}
      </label>
      <input
        {...inputProps}
        value={value}
        required={required}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />

      <span className="event-line-error-message">{errorMessage}</span>
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  id: PropTypes.number,
  errorMessage: PropTypes.string,
};
export default FormInput;
