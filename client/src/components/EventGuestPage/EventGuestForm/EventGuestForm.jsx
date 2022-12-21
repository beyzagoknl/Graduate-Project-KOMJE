import React, { useState } from "react";
import PropTypes from "prop-types";

import "./EventGuestForm.css";
import Button from "../../Button/Button";
const EventGuestForm = ({ onChange, onSubmit, formProps }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <div className="questionBox">
      <div className="eventGuest-form-box">
        <form onSubmit={onSubmit} className="guest-form-box">
          {formProps?.map((question, index) => {
            return (
              <div key={question.key} className="question">
                <div className="question-options">
                  <div className="question-text">
                    {index + 1} - {question.label}{" "}
                    {question.attributes.required && (
                      <span className="required">(required)</span>
                    )}
                  </div>

                  {question.attributes.type === "text" && (
                    <div className="full-name-input-box">
                      <input
                        type="text"
                        required={question.attributes.required}
                        className="text-number-input"
                        name={question.key}
                        placeholder="Full name"
                        onChange={onChange}
                        onBlur={handleFocus}
                        onFocus={handleFocus}
                        focused={focused.toString()}
                      ></input>
                    </div>
                  )}

                  {question.attributes.type === "email" && (
                    <input
                      type="email"
                      required={question.attributes.required}
                      className="text-number-input"
                      name={question.key}
                      placeholder="Email"
                      onChange={onChange}
                      onBlur={handleFocus}
                      focused={focused.toString()}
                    ></input>
                  )}
                  {question.attributes.type === "number" && (
                    <input
                      type="number"
                      required={question.attributes.required}
                      name={question.key}
                      className="text-number-input"
                      placeholder="Number"
                      min={question.attributes.min}
                      max={question.attributes.max}
                      onChange={onChange}
                      onBlur={handleFocus}
                      focused={focused.toString()}
                    ></input>
                  )}
                  {question.attributes.type === "singleChoice" &&
                    question.options.map((option) => {
                      return (
                        <div key={option.key} className="answer-input-box">
                          <input
                            type="radio"
                            required={question.attributes.required}
                            className="radio-input"
                            value={option.value}
                            name={question.key}
                            onChange={onChange}
                            focused={focused.toString()}
                          />
                          <label className="value-box">{option.value}</label>
                        </div>
                      );
                    })}
                  {question.attributes.type === "multipleChoice" &&
                    question.options.map((option) => {
                      return (
                        <div key={option.key} className="answer-input-box">
                          <input
                            className="radio-input"
                            required={question.attributes.required}
                            type="checkbox"
                            value={option.value}
                            checked={option.checked}
                            name={question.key}
                            onChange={(e) => onChange(e, true)}
                          />
                          <label className="value-box">{option.value}</label>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
          <Button label="Submit" />
        </form>
      </div>
    </div>
  );
};

EventGuestForm.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  formProps: PropTypes.array,
};
export default EventGuestForm;
