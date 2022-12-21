import React, { useState, useEffect, useContext, useRef } from "react";
import PropTypes from "prop-types";
import FormContainer from "../../Form/FormContainer/FormContainer";
import { StepperContext } from "../../../contexts/StepperContext";
import Button from "../../Button/Button";
import FormQuestion from "../../Form/FormInput/FormQuestion";

const QuestionsForm = ({ form, setForm, submitFunc, isEventCreated }) => {
  const formRef = useRef();
  const { setValidation, next } = useContext(StepperContext);
  const [counter, setCounter] = useState(4);

  useEffect(() => {
    if (isEventCreated) {
      next();
    }
  }, [isEventCreated, form]);

  useEffect(() => {
    setValidation(2, submitForm);
  }, []);

  const submitForm = () =>
    formRef.current.dispatchEvent(
      new Event("submit", { bubbles: true, cancelable: true })
    );

  const questionModel = {
    key: `question_${counter}`,
    label: "",
    attributes: {
      required: false,
      type: "text",
    },
    options: [],
  };

  const addQuestion = () => {
    setForm((form) => {
      const newForm = [...form, questionModel];
      return newForm;
    });
    setCounter((counter) => counter + 1);
  };

  const setQuestion = (question) => {
    setForm((form) => {
      const index = form.findIndex((q) => q.key === question.key);
      form.splice(index, 1, question);
      return Object.assign([], form);
    });
  };

  const deleteQuestion = (key) => {
    setForm((form) => {
      const newForm = form.filter((q) => q.key !== key);
      return newForm;
    });
  };

  const validateForm = (e) => {
    const form = e.target;
    const elements = Array.from(form.elements);
    let firstInvalidElement;
    elements.forEach((element) => {
      if (!element.checkValidity() && !firstInvalidElement) {
        firstInvalidElement = element;
      }
      element.focus();
    });
    if (firstInvalidElement) {
      firstInvalidElement.focus();
    }

    return form.checkValidity();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validateForm(e)) {
      submitFunc();
    }
  };

  return (
    <FormContainer title="Create Your RSVP Questions">
      <div className="information-about-form">
        <div></div>
        <p>
          - First 3 questions can not be removed or edited, Those are minimum
          requirements for event cards.
        </p>
        <p>
          - You can add, remove questions and also options for your question.
        </p>
      </div>
      <form className="komje-form" ref={formRef} onSubmit={onSubmit}>
        {form?.map((question, index) => {
          return (
            <FormQuestion
              key={`question_${index}`}
              index={index}
              question={question}
              setQuestion={setQuestion}
              deleteQuestion={deleteQuestion}
              disabled={index < 3}
            />
          );
        })}
        <Button label={"Add"} type="button" onClick={addQuestion} />
      </form>
    </FormContainer>
  );
};

export default QuestionsForm;

QuestionsForm.propTypes = {
  form: PropTypes.array,
  setForm: PropTypes.func,
  submitFunc: PropTypes.func,
  isEventCreated: PropTypes.bool,
};
