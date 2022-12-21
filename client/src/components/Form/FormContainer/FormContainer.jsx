import React from "react";
import PropTypes from "prop-types";
import "./FormContainer.css";

const FormContainer = ({ title, children }) => {
  return (
    <div className="komje-form-container">
      <h2 className="komje-form-container-header">{title}</h2>
      {children}
    </div>
  );
};

export default FormContainer;

FormContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node]),
};
