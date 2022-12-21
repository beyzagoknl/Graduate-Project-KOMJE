import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const StepperContext = createContext();

export const StepperContextProvider = ({ children }) => {
  const [validations, setValidations] = useState({});
  const [step, setStep] = useState(0);
  const [isCompleted, setCompleted] = useState(false);

  const prev = () => {
    if (step === 0) return;
    setStep((current) => current - 1);
  };

  const next = () => {
    setStep((current) => current + 1);
  };

  const submit = () => {
    if (validations[step]) {
      validations[step]();
    } else {
      next();
    }
  };

  const setValidation = (step, validationFunction) => {
    setValidations((validations) => {
      validations[step] = validationFunction;
      return validations;
    });
  };

  return (
    <StepperContext.Provider
      value={{
        step,
        isCompleted,
        next,
        prev,
        submit,
        setValidation,
        setCompleted,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
};

StepperContextProvider.propTypes = {
  children: PropTypes.node,
};
