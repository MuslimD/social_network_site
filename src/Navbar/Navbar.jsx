import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import {BiExit} from 'react-icons/bi'
import s from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <BrowserRouter>
      <div className={s.links}>
        <Link to="">
          <BiUserCircle className={s.iconsNav} />
          Моя страница
        </Link>
        <Link to="">
          <BiSearchAlt2 className={s.iconsNav} />
          Интересное
        </Link>
        <Link to="">
          <TbMessageCircle className={s.iconsNav} />
          Мессенджер
        </Link>
        <Link to="">
          <FaUserFriends className={s.iconsNav} />
          Подписки
        </Link>
        <Link to="">
          <FaUserFriends className={s.iconsNav} />
          Подписчики
        </Link>
        <div><BiExit className={s.iconsNav}/>Выход</div>
      </div>
    </BrowserRouter>
  );
};

export default Navbar;
