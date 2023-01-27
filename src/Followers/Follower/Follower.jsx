import React from "react";
import s from "./Follower.module.scss";
import fakeavatar from "../../image/avatar.png";
import { createChat, getmessages, writeUser } from "../../features/messageSlice";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
const Follower = ({ user, userid }) => {
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
              dispatch(createChat({userid:user._id, sender: userid}))
              dispatch(writeUser(user));
              
              
              
            }}
            className={s.message}
          >
            Написать
          </button>
        </NavLink>
        <button className={s.unfollow}>Удалить</button>
      </div>
    </div>
  );
};

export default Follower;
