import React from "react";
import { Link, Navigate } from "react-router-dom";
import style from "./header.module.css";

const Header = ({ dataAuth, setAuth, auth, setDataAuth, dataReg }) => {
  const exit = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      setDataAuth(null);
      setAuth(null);
      window.localStorage.removeItem("token");
    }
  };

  return (
    <div className={style.header}>
      {dataAuth || auth || dataReg ? (
        <Link to="/" className={style.exit} onClick={exit}>
          Выйти
        </Link>
      ) : (
        <>
          <Link to="/" className={style.home}>
            Главная
          </Link>

          <Link to="/authorization" className={style.authorization}>
            Вход
          </Link>

          <Link to="/register" className={style.register}>
            Регистрация
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
