import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiPencil } from "react-icons/bi";
import fakeavatar from "../../image/avatar.png";
import s from "./UserInfo.module.scss";
import {
  getuser,
  patchaboutme,
  patchuser,
  useravatar,
} from "../../features/userSlice";

const UserInfo = ({ userid }) => {
  const avatar = useSelector((state) => state.userSlice.avatar);
  const login = useSelector((state) => state.userSlice.login);
  const aboutme = useSelector((state) => state.userSlice.aboutme);
  const changeusererr = useSelector((state) => state.userSlice.changeusererr);
  const ischangeuser = useSelector((state) => state.userSlice.ischangeuser);
  const [change_name, SetChangeName] = useState(false);
  const [userName, SetUserName] = useState("");
  const [aboutMeChange, setAboutMeChange] = useState(false);
  const [aboutMe, setAboutMe] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getuser({ userid }));
  }, [dispatch]);
  const changesName = () => {
    if (userName !== "") {
      dispatch(patchuser({ userid, userName }));
      SetChangeName(false);
    }
  };
  const changesAboutMe = () => {
    dispatch(patchaboutme({ userid, aboutMe }));
    setAboutMeChange(false);
  };

  return (
    <div className={s.user}>
      {changeusererr && changeusererr}
      {!ischangeuser ? (
        <>
          {!avatar && (
            <input  className={s.hiden_input} type="file" />
          )}
          <img
            className={s.user_avatar}
            src={avatar ? `http://localhost:4000/avatar/${avatar}` : fakeavatar}
            alt="Аватар пользователя"
          />
          <div>
            {change_name ? (
              <div>
                <input
                  placeholder="поле не должно быть пустым"
                  value={userName}
                  onChange={(e) => SetUserName(e.target.value)}
                />{" "}
                <button
                  className={s.change_cancelation}
                  onClick={() => SetChangeName(false)}
                >
                  Отмена
                </button>
                <button className={s.changes_button} onClick={changesName}>
                  Изменить
                </button>
              </div>
            ) : (
              <div className={s.name}>
                Имя: {login}{" "}
                <BiPencil
                  onClick={() => {
                    SetUserName(login);
                    SetChangeName(true);
                  }}
                  className={s.pen_change}
                />
              </div>
            )}
          </div>
          {aboutme ? (
            aboutMeChange ? (
              <div>
                <input
                  placeholder="поле не должно быть пустым"
                  value={aboutMe}
                  onChange={(e) => setAboutMe(e.target.value)}
                />
                <button
                  className={s.change_cancelation}
                  onClick={() => setAboutMeChange(false)}
                >
                  Отмена
                </button>
                <button className={s.changes_button} onClick={changesAboutMe}>
                  Изменить
                </button>
              </div>
            ) : (
              <div className={s.aboutme_text}>
                Обо мне: {aboutme}
                <BiPencil
                  onClick={() => {
                    setAboutMe(aboutme);
                    setAboutMeChange(true);
                  }}
                  className={s.pen_change}
                />
              </div>
            )
          ) : (
            <div className={s.create_aboutme}>
              <input
                placeholder="Обо мне..."
                type="text"
                value={aboutMe}
                onChange={(e) => setAboutMe(e.target.value)}
              />
              <button className={s.changes_button} onClick={changesAboutMe}>
                +
              </button>
            </div>
          )}
        </>
      ) : (
        <div className={s.preloader}></div>
      )}
    </div>
  );
};

export default UserInfo;
