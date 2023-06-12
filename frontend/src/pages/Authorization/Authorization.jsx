import React, { useEffect, useState } from "react";
import style from "./authorization.module.css";
import axios from "../../axios.js";
import { Navigate } from "react-router-dom";
import { AxiosError } from "axios";

const Authorization = ({ dataAuth, setDataAuth, authMe }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = async () => {
    await axios
      .post("/auth/login", {
        email,
        password,
      })
      .then((res) => res.data)
      .then((data) => setDataAuth(data))
      .catch((error) => {
        console.log(error);
        alert("Не удалось авторизоваться!\nНеправильный логин или пароль");
      });
  };

  if (dataAuth) {
    return <Navigate to="/goodAuth" />;
  }

  if (authMe) {
    return <Navigate to="/goodAuth" />;
  }

  return (
    <div>
      <div className={style.authorization}>
        <div>
          <input
            type="email"
            placeholder="Введите ваш email"
            className={style.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Введите пароль"
            className={style.password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <button onClick={auth} className={style.entry}>
        Войти
      </button>
    </div>
  );
};

export default Authorization;
