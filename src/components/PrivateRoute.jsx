import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) {
    toast.error("This is a private page!", { id: "private-page" });
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
