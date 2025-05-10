import React from "react";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const RegistrationPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <RegistrationForm />
    </>
  );
};

export default RegistrationPage;
