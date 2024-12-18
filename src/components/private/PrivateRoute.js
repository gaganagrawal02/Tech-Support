import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./auth";

const PrivateRoute = ({ children }) => {
  // If the user is authenticated, render the children; otherwise, redirect to login
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
