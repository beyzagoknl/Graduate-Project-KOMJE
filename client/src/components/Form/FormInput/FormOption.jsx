import React from "react";
import PropTypes from "prop-types";

const FormOption = ({
  option,
  checked,
  type,
  disabled,
  onChange,
  ...optionProps
}) => {
  return (
    <div key={option.key} className="komje-form-option">
      <input
        type={type}
        name={option.key}
        disabled={disabled}
        onChange={onChange}
        checked={checked}
        {...optionProps}
      />{" "}
      {option.value}
    </div>
  );
};

export default FormOption;

FormOption.propTypes = {
  option: PropTypes.object,
  checked: PropTypes.bool,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
