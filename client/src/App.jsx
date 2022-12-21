import React from "react";
import { ToastContainer } from "react-toastify";

import Nav from "./components/Nav/Nav";

import Footer from "./components/Footer/Footer";
import AppRoutes from "./AppRoutes";
import "./App.css";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Nav />
      <AppRoutes />
      <Footer />
    </>
  );
};

export default App;
