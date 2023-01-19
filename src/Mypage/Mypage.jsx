import React, { useEffect } from "react";
import s from "./Mypage.module.scss";
import post from "./image/post.png";
import fakeavatar from "./image/avatar.png";
import { BiLike } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { BsFillPenFill } from "react-icons/bs";
import { getuser } from "../features/userSlice";

const Mypage = ({userid}) => {
  const avatar = useSelector((state) => state.userSlice.avatar);
  const login = useSelector((state) => state.userSlice.login);
  const aboutme = useSelector((state) => state.userSlice.aboutme);
  const dispatch = useDispatch()
useEffect(() => {
dispatch(getuser({userid}))
})
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
        <img className={s.user_avatar}
          src={avatar ? `http://localhost:4000/avatar/${avatar}` : fakeavatar}
          alt="Аватар пользователя"
        />
        <div className={s.name}>Имя: {login}</div>
        {aboutme ? (
          <div className={s.aboutme_text}>
            Обо мне: {aboutme}
            <button>
              <BsFillPenFill />
            </button>
          </div>
        ) : (
          <div className={s.aboutme_input}>
            <input placeholder="Обо мне..." type="text" />
            <button>+</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mypage;
