import React from "react";
import "./EventInfo.css";

const EventInfo = ({ ...infos }) => {
  const weddingDate = new Date(infos.date).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className="weddingDefault">
      <div className="item">
        <span className="title">Title:</span> {infos.eventTitle}
      </div>
      <div className="item">
        <span className="title">Bride and Groom:</span> {infos.brideName}&
        {infos.groomName}
      </div>
      <div className="item">
        <span className="title">Date:</span> {weddingDate}
      </div>
      <div className="item">
        <span className="title">Address:</span> {infos.address}
      </div>
      <div className="item">
        <span className="title">Contact:</span> {infos.contactNumber} -{" "}
        {infos.contactName}
      </div>
      <div className="item">
        <span className="title">PS:</span> <p> {infos.description}</p>
      </div>
    </div>
  );
};

export default EventInfo;
