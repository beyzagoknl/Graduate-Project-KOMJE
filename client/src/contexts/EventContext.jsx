import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const EventContext = createContext();

export const EventContextProvider = ({ children }) => {
  const [event, setEvent] = useState();
  const [events, setEvents] = useState([]);

  return (
    <EventContext.Provider value={{ event, events, setEvent, setEvents }}>
      {children}
    </EventContext.Provider>
  );
};

EventContextProvider.propTypes = {
  children: PropTypes.node,
};
