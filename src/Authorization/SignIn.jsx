import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authUsers } from "../features/userSlice";
import styles from "./authUser.module.scss";
const SignIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSetName = (e) => {
    setLogin(e.target.value);
  };

  const handleSetPass = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form className={styles.card}>
      <div className={styles.Register}>
        <div className={styles.h1}>Вход</div>
        <input
          className={styles.inputText}
          type="text"
          value={login}
          placeholder="Имя пользователя"
          onChange={handleSetName}
        />
        <div />
        <input
          className={styles.inputPassword}
          type="password"
          value={password}
          placeholder="Пароль"
          onChange={handleSetPass}
        />
        <div />
        <button>Войти</button>
        <Link className={styles.LinkUp} to="/signup">
          {" "}
          Зарегистрироваться
        </Link>
      </div>
    </form>
  );
};

export default SignIn;
