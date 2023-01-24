import React from "react";
import { NavLink } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { BiExit } from "react-icons/bi";
import { IoIosMoon } from "react-icons/io"
import s from "./Navbar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { removetok } from "../features/userSlice";
import logo from '../image/Logo.png'
import Input from "./Input";

const Navbar = () => {
  const token = useSelector((state) => state.userSlice.token);
  const dispatch = useDispatch()
  const isactive = ({ isActive }) => (isActive ? s.active : "");
  const clearToken = () => {
    localStorage.clear(token);
    dispatch(removetok());
  };
  return (
    <div className={s.links}>
      <div className={s.logo}>
        <img className={s.meet } src={logo} alt="" />
        <Input/>
      </div>
      <NavLink to="/mypage" className={isactive}>
        <BiUserCircle className={s.iconsNav} />
        Моя страница
      </NavLink>
      <NavLink to="/" className={isactive}>
        <BiSearchAlt2 className={s.iconsNav} />
        Интересное
      </NavLink>
      <NavLink to="/messagepage" className={isactive}>
        <TbMessageCircle className={s.iconsNav} />
        Мессенджер
      </NavLink>
      <NavLink to="/followspage" className={isactive}>
        <FaUserFriends className={s.iconsNav} />
        Подписки
      </NavLink>
      <NavLink to="/followerspage" className={isactive}>
        <FaUserFriends className={s.iconsNav} />
        Подписчики
      </NavLink>
      <div className={s.iconsNav} onClick={clearToken}> 
        <BiExit className={s.iconsNav} />
        Выход
      </div>
    </div>
  );
};

export default Navbar;
