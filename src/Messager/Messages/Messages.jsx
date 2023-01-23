import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getmessages } from "../../features/messageSlice";

const Messages = ({ chatsId }) => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messageSlice.messages);
  console.log(chatsId);
  useEffect(() => {
  dispatch(getmessages({ chatsId }));
  }, [dispatch,]);
  if (chatsId === "") {
    return <div>Чат не выбран. Выберите чат </div>;
  }

  return (
    <div>
      {messages.map((item) => {
        return <div>{chatsId}</div>;
      })}
    </div>
  );
};

export default Messages;
