import React from "react";
import s from "./Follow.module.scss";
import fakeavatar from "../image/avatar.png";

const Follow = ({ user }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.block}>
        <img
          src={
            user.avatar
              ? `http://localhost:4000/avatar/${user.avatar}`
              : fakeavatar
          }
          alt=""
        />
        <div className={s.content}>{user.login}</div>
        <div className={s.buttons}>
          <button className={s.message}>Написать</button>
          <button className={s.unfollow}>Отписаться</button>
        </div>
      </div>
    </div>
  );
};

export default Follow;
