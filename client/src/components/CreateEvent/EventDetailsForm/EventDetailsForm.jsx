import React, { useRef, useEffect, useContext } from "react";
import { detailsFormInputs } from "../data";
import PropTypes from "prop-types";
import FormContainer from "../../Form/FormContainer/FormContainer";
import FormInput from "../../Form/FormInput/FormInput";
import FormTextArea from "../../Form/FormInput/FormTextArea";
import { StepperContext } from "../../../contexts/StepperContext";

const EventDetailsForm = ({ values, setValues }) => {
  const formRef = useRef();
  const { setValidation, next } = useContext(StepperContext);

  const onChange = (e) => {
    setValues((values) => {
      return { ...values, [e.target.name]: e.target.value };
    });
  };

  const submitForm = () =>
    formRef.current.dispatchEvent(
      new Event("submit", { bubbles: true, cancelable: true })
    );

  useEffect(() => {
    setValidation(0, submitForm);
  }, []);

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
      next();
    }
  };

  return (
    <FormContainer title="Create Your Special Invitation">
      <form className="komje-form" ref={formRef} onSubmit={onSubmit}>
        {detailsFormInputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <FormTextArea
          label="Description of Wedding"
          value={values.name}
          onChange={onChange}
        />
      </form>
    </FormContainer>
  );
};

export default EventDetailsForm;

EventDetailsForm.propTypes = {
  values: PropTypes.object,
  setValues: PropTypes.func,
};
