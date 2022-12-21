import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import "./accordion.css";

const Accordion = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="accordion">
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => setIsActive(!isActive)}
          >
            <div>{title}</div>
            <div>{isActive ? "-" : "+"}</div>
          </div>
          {isActive && <div className="accordion-content">{children}</div>}
        </div>
      </div>
    </>
  );
};

export default Accordion;

Accordion.propTypes = {
  title: string,
  children: PropTypes.node,
};
