import React, { useState } from "react";
import s from "./Chat.module.scss";
import fakeavatar from "../../image/avatar.png";
import { MdOutlineDeleteSweep } from "react-icons/md";

const Chat = ({ user, setChatsId }) => {
  const [isChatsDelete, setisChatsDelete] = useState(false);
  return (
    <div
      onMouseEnter={() => setisChatsDelete(true)}
      onMouseLeave={() => setisChatsDelete(false)}
      onClick={() => setChatsId(user._id)}
      className={s.chat}
    >
      <img
        src={
          user.avatar
            ? `http://localhost:4000/avatar/${user.avatar}`
            : fakeavatar
        }
      />
      <div className={s.chat_login}>{user.login}</div>
      {isChatsDelete && <MdOutlineDeleteSweep className={s.delete_icons} />}
    </div>
  );
};

export default Chat;
