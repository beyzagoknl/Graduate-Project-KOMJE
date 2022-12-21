import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const LabelButton = ({ label, disabled, htmlFor, ...rest }) => {
  return (
    <label
      className="komje-button"
      disabled={disabled}
      htmlFor={htmlFor}
      {...rest}
    >
      {label}
    </label>
  );
};

export default LabelButton;

LabelButton.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  htmlFor: PropTypes.string,
  rest: PropTypes.any,
};
