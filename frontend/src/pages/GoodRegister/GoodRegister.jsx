import React from "react";
import { Navigate } from "react-router-dom";

const GoodRegister = ({ auth }) => {
  if (!window.localStorage.getItem("token") && !auth) {
    return <Navigate to="/" />;
  }

  if (!window.localStorage.getItem("token") && !auth) {
    return <Navigate to="/" />;
  }

  if (auth) {
    <Navigate to="/goodAuth" />;
  }

  return (
    <div>
      <h1>Вы успешно зарегестрировались!</h1>
    </div>
  );
};

export default GoodRegister;
