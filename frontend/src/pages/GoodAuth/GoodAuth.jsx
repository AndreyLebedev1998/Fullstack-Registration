import React from "react";
import { Navigate } from "react-router-dom";

const GoodAuth = ({ dataAuth, auth }) => {
  if (dataAuth !== null && dataAuth.token) {
    window.localStorage.setItem("token", dataAuth.token);
  }

  if (!window.localStorage.getItem("token") && !auth) {
    return <Navigate to="/" />;
  }

  if (auth) {
    <Navigate to="/goodAuth" />;
  }

  return (
    <div>
      <h1>Вы успешно авторизовались!</h1>
    </div>
  );
};

export default GoodAuth;
