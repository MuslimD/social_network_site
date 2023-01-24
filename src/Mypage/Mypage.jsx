import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comments from "../Comments/Comments";
import { getuser } from "../features/userSlice";
import s from "./Mypage.module.scss";
import UserInfo from "./UserInfo/UserInfo";
import UserPosts from "./UserPosts/UserPosts";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { RiEditBoxLine } from "react-icons/ri";

const Mypage = ({ userid }) => {
  const [idCom, setIdCom] = useState("");

  return (
    // <div className={s.wrapper}>
    //    {idCom === "" ? (
    //     <UserPosts userid={userid} setIdCom={setIdCom} />
    //   ) : (
    //     <div className={s.wrapper_left}>

    //       <button className={s.back_toposts} onClick={() => setIdCom("")}>
    //         <BiArrowBack />
    //         НАЗАД
    //       </button>
    //       <Comments idCommentaries={idCom} userid={userid}/>
    //     </div>
    //   )}
    //   <UserInfo userid={userid} />
    // </div>

    <div className={s.myPage}>
      <div className={s.backgroundCase}>
        <div className={s.photoCase}><img className={s.photo} src={require("./img/gigachad.webp")} alt="" />
        <AiOutlineCloudUpload className={s.editUserPhoto} />
        </div>
        <img
          className={s.backgroundImg}
          src={require("./img/background.jpg")}
          alt=""
        />
        <div className={s.editBackground}>
          <AiOutlineCloudUpload className={s.upload} />
          <div className={s.uploadText}>Изменить фон</div>
        </div>
      </div>
      <div className={s.emptyBlock}>
        <div className={s.info}>
          <div className={s.name}>Артур Шелбаев</div>
          <div className={s.aboutme}>Фронтендер</div>
        </div>
        <div className={s.editName}>
          <div className={s.edit}><RiEditBoxLine /></div>
          <div className={s.editText}>Изменить данные</div>
          </div>
      </div>
    </div>
  );
};

export default Mypage;
