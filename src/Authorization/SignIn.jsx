import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authUsers } from "../features/userSlice";
import styles from "./authUser.module.scss";
import { RxEyeClosed } from "react-icons/rx";
import { AiOutlineEye } from "react-icons/ai";
const SignIn = () => {
  const [inputType, setInputType] = useState("password")
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(authUsers({ login, password }));
  };
  

  return (
    <div className={styles.sign}>
      <form onSubmit={(e) => handleSignIn(e)}>
        <div className={styles.sign_in}>Вход</div>
        <input
          className={styles.input_login}
          type="text"
          value={login}
          placeholder="Имя пользователя"
          onChange={(e) => setLogin(e.target.value)}
        />
        <div />
        <div  className={styles.eye1}>
        {inputType ? <RxEyeClosed onClick={() => setInputType(false)}/> :  <AiOutlineEye onClick={() => setInputType(true)}/>
}
        </div>
        <input
          className={styles.input_password}
          type={inputType ? "text": "password"}
          value={password}
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div />
        <button>Войти</button>
        <div className={styles.div_link}>
          <Link to="/signup"> Регистрация</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
