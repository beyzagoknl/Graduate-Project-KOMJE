import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./ProgressBar.css";
import Point from "../Point/Point.jsx";
import { StepperContext } from "../../../contexts/StepperContext";

const ProgressBar = ({ points }) => {
  const { step, isCompleted } = useContext(StepperContext);

  const getStatus = (index) => {
    switch (true) {
      case isCompleted:
        return "PASSED";
      case step === index:
        return "CURRENT";
      case step > index:
        return "PASSED";
      case step < index:
        return "WAITING";
    }
  };

  return (
    <div className="komje-progressbar">
      {points.map((point, index) => {
        const status = getStatus(index);
        const nextStatus = getStatus(index + 1);
        return (
          <div
            key={index}
            className={index !== points.length - 1 ? "full-width" : ""}
          >
            <Point number={index + 1} label={point} status={status} />
            {index !== points.length - 1 && (
              <div
                className={`line 
                ${
                  status === "PASSED" && nextStatus === "PASSED"
                    ? "passed-passed"
                    : ""
                }
                ${
                  status === "PASSED" && nextStatus === "CURRENT"
                    ? "passed-current"
                    : ""
                }
                ${
                  status === "CURRENT" && nextStatus === "WAITING"
                    ? "current-waiting"
                    : ""
                }
                ${
                  status === "WAITING" && nextStatus === "WAITING"
                    ? "waiting-waiting"
                    : ""
                }
                `}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  points: PropTypes.array,
  current: PropTypes.number,
  isCompleted: PropTypes.bool,
};
