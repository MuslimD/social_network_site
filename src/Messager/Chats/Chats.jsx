import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getchats } from "../../features/messageSlice";
import s from "./Chats.module.scss";
import Chat from "../Chat/Chat";

const Chats = ({ userid, setChatsId }) => {
  const chats = useSelector((state) => state.messageSlice.chats);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getchats({ userid }));
  }, [dispatch]);
  return (
    <div className={s.chats}>
      {chats.map((item) => {
         if (item.recipient._id !== userid) {
          return <Chat user={item.recipient} setChatsId={setChatsId} />;
        }
        if (item.sender._id !== userid) {
          return <Chat user={item.sender} setChatsId={setChatsId} />;
        } 
       
      })}
    </div>
  );
};

export default Chats;
