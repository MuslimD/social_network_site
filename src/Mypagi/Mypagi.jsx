import React from "react";
import s from "./Mypagi.module.scss";
import post from "./image/post.png";
import avatar from './image/avatar.png'
import { BiLike } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";

const Mypagi = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.text}>Описание поста</div>
        <img src={post} alt="Фото поста" />
        <div className={s.buttons}>
          <div className={s.like}>
            <BiLike />
          </div>
          <div className={s.comment}>
            <BiCommentDetail />
          </div>
        </div>
      </div>
      <div className={s.user}>
        <img src={avatar} alt="Аватар пользователя" />
        <div className={s.name}>Имя Фамилия</div>
        <form>
            <input placeholder="Обо мне..." type="text" />
        </form>
      </div>
    </div>
  );
};

export default Mypagi;
