import React from "react";
import PropTypes from "prop-types";
import "./FormInput.css";

const FormTextArea = ({ label, value, onChange }) => {
  return (
    <div className="event-line">
      <label className="event-line-title">{label}</label>
      <textarea
        type="text"
        className="event-line-description"
        placeholder="Write nice note for guests"
        name="description"
        rows="5"
        cols="15"
        value={value}
        maxLength="500"
        onChange={onChange}
      />
    </div>
  );
};

export default FormTextArea;

FormTextArea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
