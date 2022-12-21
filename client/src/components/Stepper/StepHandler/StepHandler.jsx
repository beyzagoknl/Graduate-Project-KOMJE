import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { StepperContext } from "../../../contexts/StepperContext";
import "./StepHandler.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import Button from "../../Button/Button";

const StepHandler = ({ children, submitStep }) => {
  const navigate = useNavigate();
  const { step, submit, prev } = useContext(StepperContext);

  const isLastStep = () => {
    const stepLength = Array.isArray(children) ? children.length : 1;
    return step === stepLength - 1;
  };

  const isSubmitStep = () => {
    return step === submitStep;
  };

  const getButtonLabel = () =>
    isLastStep() ? "Home Page" : isSubmitStep() ? "Create Event" : "Next";

  const onClick = () => (isLastStep() ? navigate("/homePage") : submit());

  return (
    <>
      <ProgressBar
        points={children.map((child) => child.props).map((p) => p.label)}
        current={step}
      />
      <div className="komje-stepper-body">
        {children.filter((child, index) => index === step)}
      </div>
      <div className="komje-stepper-button-group">
        {!isLastStep() && (
          <Button label="Prev" disabled={step === 0} onClick={prev} />
        )}
        <Button label={getButtonLabel()} onClick={onClick} />
      </div>
    </>
  );
};

export default StepHandler;

StepHandler.propTypes = {
  children: PropTypes.node,
  submitStep: PropTypes.number,
};
