import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const USER = "USER";
const TOKEN = "TOKEN";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  const update = (token, user) => {
    setUser(user);
    setToken(token);
    localStorage.setItem(USER, JSON.stringify(user));
    localStorage.setItem(TOKEN, JSON.stringify(token));
  };

  useEffect(() => {
    const userItem = JSON.parse(localStorage.getItem(USER));
    const tokenItem = JSON.parse(localStorage.getItem(TOKEN));

    if (userItem) {
      setUser(userItem);
    }

    if (tokenItem) {
      setToken(tokenItem);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, update }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};
