import React from "react";
import PropTypes from "prop-types";
import "../Card/Card.css";
import defaultEventImage from "/public/defaultEventImage.jpeg";

const Card = ({ onClick, ...event }) => {
  return (
    <div className="card" onClick={onClick}>
      <img
        className="card-img"
        src={event.templateDetails.images?.[0]?.url || defaultEventImage}
        alt={event.templateDetails.images?.[0]?.alt || "event image"}
      />
      <div className="card-content">
        <p className="names">
          {event.templateDetails.brideName}&{event.templateDetails.groomName}
        </p>
      </div>
    </div>
  );
};
Card.propTypes = {
  event: PropTypes.array,
  onClick: PropTypes.func,
};
export default Card;
