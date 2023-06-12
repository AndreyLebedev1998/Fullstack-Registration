import React from "react";
import { Navigate } from "react-router-dom";

const Home = ({ auth }) => {
  if (auth) {
    return <Navigate to="/goodAuth" />;
  }

  console.log(auth);
  return (
    <div>
      <h1>Главная страница</h1>
    </div>
  );
};

export default Home;
