import React, { useEffect } from "react";
import notFoundImage from "../../assets/notfound.jpg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <h2>This page is not found!</h2>
      <p>Redirecting to homepage in 3 seconds...</p>
      <img src={notFoundImage} alt="Not Found" style={{ maxWidth: "100%" }} />
    </div>
  );
};

export default NotFound;
