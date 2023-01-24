import React from "react";
import s from "./Interes.module.scss";
import avatar from "./images/avatar.png";
import post from "./images/post.png";
import {BiLike} from 'react-icons/bi'
import {BiCommentDetail} from 'react-icons/bi'

const Interes = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.block}>
        <div className={s.user}>
          <img src={avatar} alt="Фото юзера" />
          <p>Имя Фамилия</p>
        </div>
        <div className={s.post}>
          <p>Описание поста</p>
          <img className={s.postImg} src={post} alt="" />
        </div>
        <div className={s.buttons}>
            <div className={s.like}><BiLike/></div>
            <div className={s.comment}><BiCommentDetail/></div>
        </div>
      </div>
    </div>
  );
};

export default Interes;
