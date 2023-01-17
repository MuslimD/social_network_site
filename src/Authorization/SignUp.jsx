import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./authUser.module.scss";
const SignUp = () => {
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
        <div className={styles.h1}>Регистрация</div>
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
        <button
          disabled={!login || !password ? true : false}
          className={styles.buttonUp}
          type="submit"
        >
          Зарегистрироваться
        </button>
        <Link className={styles.LinkUp} to="/">
          {" "}
          <div className={styles.h3Log}> Войти</div>
        </Link>
      </div>
    </form>
  );
};

export default SignUp;
