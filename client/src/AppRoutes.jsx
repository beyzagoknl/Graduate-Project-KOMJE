import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/HomePage/Home";
import Welcome from "./pages/WelcomePage/Welcome";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CreateForm from "./pages/CreateForm/CreateForm";
import EventPage from "./pages/EventPage/EventPage";
import AboutUs from "./pages/User/AboutUs/AboutUs";
import Result from "./pages/ResultPage/Result";
import EventGuestPage from "./pages/EventGuestPage/EventGuestPage";
import VerifyEmailFormPage from "./pages/EmailForm/VerifyEmail";
import UpdatePassword from "./pages/UpdatePassword/UpdatePassword";

const AppRoutes = () => {
  const { user } = useAuthContext();
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route
        path="/homePage"
        element={user ? <Home /> : <Navigate to="/login" />}
      />
      <Route
        path="/createForm"
        element={user ? <CreateForm /> : <Navigate to="/login" />}
      />
      <Route
        path="/event/:eventId"
        element={user ? <EventPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to="/homePage" />}
      />

      <Route
        path="/register"
        element={!user ? <Register /> : <Navigate to="/homePage" />}
      />
      <Route
        path="verifyAccount/user/:userId/token/:token"
        element={<Login />}
      />
      <Route path="forgotPassword/" element={<VerifyEmailFormPage />} />
      <Route
        path="forgetPassword/user/:userId/reset/:token/"
        element={<UpdatePassword />}
      />
      <Route path="/to/:eventId" element={<EventGuestPage />} />
      <Route path="/result/:eventId" element={<Result />} />
    </Routes>
  );
};

export default AppRoutes;
