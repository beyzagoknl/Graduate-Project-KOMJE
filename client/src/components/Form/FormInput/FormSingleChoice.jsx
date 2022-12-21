import React from "react";
import PropTypes from "prop-types";
import FormOption from "./FormOption.jsx";

const FormSingleChoice = ({
  label,
  options,
  required,
  disabled,
  errorMessage,
}) => {
  return (
    <div className="event-line">
      <label className="event-line-title">
        {label}
        {required && <span className="required">(required)</span>}
      </label>
      {options.map((option) => {
        return (
          <FormOption
            key={option.key}
            option={option}
            type="radio"
            disabled={disabled}
          />
        );
      })}

      <span className="event-line-error-message">{errorMessage}</span>
    </div>
  );
};

export default FormSingleChoice;

FormSingleChoice.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
};
