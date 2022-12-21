import React from "react";
import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormOption from "./FormOption";
import "./FormInput.css";
import FormOptionCreator from "./FormOptionCreator";

const FormQuestion = ({
  index,
  question,
  setQuestion,
  deleteQuestion,
  disabled,
}) => {
  const onChangeQuestionLabel = (e) => {
    question.label = e.target.value;
    setQuestion(question);
  };

  const onSelect = (e) => {
    question.attributes.type = e.target.value;
    setQuestion(question);
  };

  const onRequiredChanged = (e) => {
    question.attributes.required = e.target.checked;
    setQuestion(question);
  };

  const onChangeMinNumber = (e) => {
    question.attributes.min = e.target.value;
    setQuestion(question);
  };

  const onChangeMaxNumber = (e) => {
    question.attributes.max = e.target.value;
    setQuestion(question);
  };

  const onChangeOptions = ({ key, value }) => {
    const options = question.options;
    let option = options.find((o) => o.key === key);
    if (!option) {
      option = { key, value: "" };
      options.push(option);
    }
    option.value = value;
    setQuestion(question);
  };

  const deleteOption = (option) => {
    question.options = question.options.filter((o) => o.key !== option.key);
    setQuestion(question);
  };

  return (
    <div key={question.key} className="komje-question-form">
      <div className="question-header">
        <label className="event-line-title">{`${index + 1}. Question`}</label>
        {!disabled && (
          <FaTrash
            className={"delete-icon"}
            onClick={() => deleteQuestion(question.key)}
            size={20}
          />
        )}
      </div>
      <FormInput
        disabled={disabled}
        label="Enter your question"
        placeholder="Are you coming?"
        required
        errorMessage="Question is required."
        onChange={onChangeQuestionLabel}
        value={question.label}
      />
      <div className="type-and-required">
        <FormSelect
          onSelect={onSelect}
          value={question.attributes.type}
          disabled={disabled}
        />
        <FormOption
          key={"required"}
          option={{ key: "required", value: "required" }}
          checked={!!question.attributes.required}
          disabled={disabled}
          onChange={onRequiredChanged}
          type="checkbox"
        />
      </div>
      {question.attributes.type === "number" && (
        <div className="attributes">
          <FormInput
            disabled={disabled}
            label="Min"
            placeholder="Minimum allowed number"
            onChange={onChangeMinNumber}
            type="number"
            value={question.attributes.min}
          />
          <FormInput
            disabled={disabled}
            label="Max"
            placeholder="Maximum allowed number"
            onChange={onChangeMaxNumber}
            type="number"
            value={question.attributes.max}
          />
        </div>
      )}
      {question.attributes.type === "singleChoice" && (
        <FormOptionCreator
          type="radio"
          options={question.options}
          onChangeOption={onChangeOptions}
          deleteOption={deleteOption}
          disabled={disabled}
        />
      )}
      {question.attributes.type === "multipleChoice" && (
        <FormOptionCreator
          type="checkbox"
          options={question.options}
          onChangeOption={onChangeOptions}
          deleteOption={deleteOption}
          disabled={disabled}
        />
      )}
    </div>
  );
};

export default FormQuestion;

FormQuestion.propTypes = {
  index: PropTypes.number,
  question: PropTypes.object,
  setQuestion: PropTypes.func,
  deleteQuestion: PropTypes.func,
  disabled: PropTypes.bool,
};
