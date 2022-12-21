import React from "react";
import PropTypes from "prop-types";

const FormSelect = ({ value, onSelect, disabled }) => {
  return (
    <div className="event-line">
      <label className="event-line-title">Question Type</label>
      <select value={value} onChange={onSelect} disabled={disabled}>
        <option value="text">Text</option>
        <option value="email">Email</option>
        <option value="singleChoice">Single Choice</option>
        <option value="multipleChoice">Multiple Choice</option>
        <option value="number">Number</option>
      </select>
    </div>
  );
};

export default FormSelect;

FormSelect.propTypes = {
  value: PropTypes.string,
  onSelect: PropTypes.func,
  disabled: PropTypes.bool,
};
