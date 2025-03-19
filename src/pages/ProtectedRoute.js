import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    alert("Please log in to book an appointment.");
    return <Navigate to="/login" />; // Redirect to login if not logged in
  }

  return children;
};

export default ProtectedRoute;