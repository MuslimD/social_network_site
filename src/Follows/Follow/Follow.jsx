import React from "react";
import s from "./Follow.module.scss";
import fakeavatar from "../../image/avatar.png";
import { getmessages, writeUser } from "../../features/messageSlice";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
const Follow = ({ user }) => {
  const dispatch = useDispatch();
  return (
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
        <NavLink to="/messagepage">
          <button
            onClick={() => {
              dispatch(writeUser(user));
              dispatch(getmessages({ chatsId: user._id }));
              console.log(user._id);
            }}
            className={s.message}
          >
            Написать
          </button>
        </NavLink>
        <button className={s.unfollow}>Отписаться</button>
      </div>
    </div>
  );
};

export default Follow;
