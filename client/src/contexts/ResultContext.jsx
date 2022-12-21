import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {
  const [result, setResult] = useState();

  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  );
};

ResultContextProvider.propTypes = {
  children: PropTypes.node,
};
