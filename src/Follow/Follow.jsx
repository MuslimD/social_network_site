import React from "react";
import s from "./Follow.module.scss";
import avatar from './images/avatar.png'


const Follow = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.block}>
        <img src={avatar} alt="" />
        <div className={s.content}>
            Имя Фамилия
        </div>
        <div className={s.buttons}>
        <button className={s.message}>Написать</button>
        <button className={s.unfollow}>Отписаться</button>
        </div>
      </div>
    </div>
  );
};

export default Follow;
