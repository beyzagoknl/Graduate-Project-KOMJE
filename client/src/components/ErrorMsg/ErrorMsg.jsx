import React from "react";
import "./ErrorMsg.css";
import PropTypes from "prop-types";
const ErrorMsg = ({ error }) => {
  return (
    <div className="error-box">
      <p className="error-msg">{error}</p>
    </div>
  );
};

export default ErrorMsg;

ErrorMsg.propTypes = {
  error: PropTypes.string,
};
