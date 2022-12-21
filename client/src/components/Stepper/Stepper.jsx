import React from "react";
import PropTypes from "prop-types";
import "./Stepper.css";
import StepHandler from "./StepHandler/StepHandler";
import { StepperContextProvider } from "../../contexts/StepperContext";

const Stepper = ({ children, submitFunc, submitStep }) => {
  return (
    <StepperContextProvider>
      <div className="komje-stepper">
        <StepHandler submitFunc={submitFunc} submitStep={submitStep}>
          {children}
        </StepHandler>
      </div>
    </StepperContextProvider>
  );
};

export default Stepper;

Stepper.propTypes = {
  children: PropTypes.node,
  submitFunc: PropTypes.func,
  submitStep: PropTypes.number,
};
