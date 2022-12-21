import React from "react";
import PropTypes from "prop-types";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Point.css";

const Point = ({ number, label, status }) => {
  return (
    <div
      className={`
        point
        ${status === "PASSED" ? "passed" : ""}
        ${status === "CURRENT" ? "current" : ""}
        ${status === "WAITING" ? "waiting" : ""}
      `}
    >
      {status === "PASSED" && <FontAwesomeIcon icon={faCheck} />}
      {(status === "WAITING" || status === "CURRENT") && number}
      <div className={`label ${status === "CURRENT" ? "label-current" : ""}`}>
        {label}
      </div>
    </div>
  );
};

export default Point;

Point.propTypes = {
  number: PropTypes.number,
  label: PropTypes.string,
  status: PropTypes.string,
};
