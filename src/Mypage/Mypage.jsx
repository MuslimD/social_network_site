import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comments from "../Comments/Comments";
import { getuser } from "../features/userSlice";
import s from "./Mypage.module.scss";
import UserInfo from "./UserInfo/UserInfo";
import UserPosts from "./UserPosts/UserPosts";
import { BiArrowBack } from "react-icons/bi";

const Mypage = ({ userid }) => {
  const [idCom, setIdCom] = useState("");
 
  return (
    <div className={s.wrapper}>
       {idCom === "" ? (
        <UserPosts userid={userid} setIdCom={setIdCom} />
      ) : (
        <div className={s.wrapper_left}>

          <button className={s.back_toposts} onClick={() => setIdCom("")}>
            <BiArrowBack />
            НАЗАД
          </button>
          <Comments idCommentaries={idCom} userid={userid}/>
        </div>
      )}
      <UserInfo userid={userid} />
    </div>
  );
};

export default Mypage;
