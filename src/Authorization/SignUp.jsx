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
    <div className={styles.sign}>
      <form>
        <div className={styles.sign_up}>Регистрация</div>
        <input
          className={styles.input_login}
          type="text"
          value={login}
          placeholder="Имя пользователя"
          onChange={handleSetName}
        />
        <div />
        <input
          className={styles.input_password}
          type="password"
          value={password}
          placeholder="Пароль"
          onChange={handleSetPass}
        />
        <div />
        <button>Зарегистрироваться</button>
        <div className={styles.div_link}>
          <Link to="/"> Вход</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
