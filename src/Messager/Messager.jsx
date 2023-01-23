import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getmessage } from "../features/messageSlice";
import Messages from "./Messages/Messages";
import Chats from "./Chats/Chats";
import s from "./Messager.module.scss";

const Message = ({ userid }) => {
  const [chatsId, setChatsId] = useState("");
  return (
    <div className={s.message}>
      <Chats userid={userid} chatsId={chatsId} setChatsId={setChatsId} />
      <Messages userid={userid} chatsId={chatsId} />
    </div>
  );
};

export default Message;
