import React, { useState } from "react";
import style from "./register.module.css";
import axios from "../../axios.js";
import { Navigate } from "react-router-dom";

const Register = ({ dataReg, setDataReg, auth }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const message =
    "Не удалось зарегестрироваться!\nИмя должно содержать не меньше 3 символов\nВведите корректный формат почты\nПароль должен быть не менее 5 символов";

  const register = () => {
    axios
      .post("/auth/register", {
        fullName,
        email,
        password,
      })
      .then((res) => res.data)
      .then((data) => setDataReg(data))
      .catch((err) => {
        console.error(err);
        alert(message);
      });
  };

  if (dataReg !== null && dataReg.token) {
    window.localStorage.setItem("token", dataReg.token);
  }

  if (dataReg) {
    return <Navigate to="/goodRegister" />;
  }

  if (auth) {
    return <Navigate to="/goodRegister" />;
  }

  return (
    <div>
      <div>
        <div>
          <input
            type="text"
            placeholder="Введите ваше имя"
            className={style.fullName}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
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
      <button onClick={register} className={style.register}>
        Регистрация
      </button>
    </div>
  );
};

export default Register;
