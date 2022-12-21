import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ label, disabled, ...rest }) => {
  return (
    <button className="komje-button" disabled={disabled} {...rest}>
      {label}
    </button>
  );
};

export default Button;

Button.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  rest: PropTypes.any,
};
