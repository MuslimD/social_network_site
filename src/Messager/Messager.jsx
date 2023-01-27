import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getchats, getmessages } from "../features/messageSlice";
import { MdOutlineDeleteSweep } from "react-icons/md";
import fakeavatar from "../image/avatar.png";
import s from "./Messager.module.scss";

const Message = ({ userid }) => {
  const dispatch = useDispatch();
  const chatsUserId = useSelector((state) => state.messageSlice.chatsUserId);
  const chatsId = useSelector((state) => state.messageSlice.chatsId);
  console.log(chatsId);
  const messages = useSelector((state) => state.messageSlice.messages);
  const chats = useSelector((state) => state.messageSlice.chats);
  const [chatsLogin, setchatsLogin] = useState(chatsUserId);
  const [removal, setRemoval] = useState("");
  useEffect(() => {
    if (chatsId !== "") {
      dispatch(getmessages({ chatsId }));
    }
    dispatch(getchats({ userid }));
  }, [dispatch]);

  return (
    <div className={s.messager}>
      {removal !== "" && (
        <div className={s.removall}>
          <div>Вы точно хотите удалить чат?</div>
          <button className={s.otm} onClick={() => setRemoval("")}>
            Отмена
          </button>
          <button className={s.delete_chat}>Удалить</button>
        </div>
      )}
      <div className={s.chats}>
        {chats.map((item) => {
          return (
            <div key={item._id} className={s.chat}>
              <div
                className={s.avatar_name}
                onClick={() => {
                  setchatsLogin(
                    item.sender._id === userid ? item.recipient : item.sender
                  );
                  dispatch(getmessages({ chatsId: item._id }));
                }}
              >
                {item.sender._id === userid ? (
                  <>
                    <img
                      className={s.avatar}
                      src={
                        item.recipient.avatar
                          ? `http://localhost:4000/avatar/${item.recipient.avatar}`
                          : fakeavatar
                      }
                    />
                    <div>{item.recipient.login}</div>
                  </>
                ) : (
                  <>
                    <img
                      className={s.avatar}
                      src={
                        item.sender.avatar
                          ? `http://localhost:4000/avatar/${item.sender.avatar}`
                          : fakeavatar
                      }
                    />
                    <div>{item.sender.login}</div>
                  </>
                )}
              </div>
              <MdOutlineDeleteSweep
                onClick={() => setRemoval(true)}
                className={s.delete_icons}
              />
            </div>
          );
        })}
      </div>

      <div className={s.messages_and_input}>
        {chatsLogin && (
          <div className={s.user_info}>
            <img src={`http://localhost:4000/avatar/${chatsLogin.avatar}`} />
            <div>{chatsLogin.login}</div>
          </div>
        )}
        <div className={s.messages}>
          {!chatsLogin ? (
            <div className={s.not_chat}>Выберите чат!</div>
          ) : messages.length < 1 ? (
            <div className={s.not_chat}>В этом чате нет сообщений</div>
          ) : (
            messages.map((item) => {
              return (
                <div
                  className={item.sender === userid ? s.message_my : s.message}
                >
                  {item.text}
                </div>
              );
            })
          )}
        </div>

        {chatsLogin && (
          <>
            <input className={s.message_input} />
            <button className={s.message_button}>Отправить</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Message;
