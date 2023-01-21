import React, { useEffect, useState } from "react";
import s from "./Comments.module.scss";
import {
  createComment,
  getcommentspostsid,
  getpostsuserid,
} from "../features/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import fakeavatar from "../image/avatar.png";
const Comments = ({ idCommentaries, userid }) => {
  const [addCom, setAddCom] = useState("");
  const postsload = useSelector((state) => state.postsSlice.postsload);
  const comments = useSelector((state) => state.postsSlice.comments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcommentspostsid({ postsid: idCommentaries }));
  }, [dispatch]);

  const addComment = () => {
    if (addCom !== "") {
      dispatch(createComment({ idCommentaries, userid, commentText: addCom }));
    }
  };
  

  return postsload ? (
    <div className={s.preloader}></div>
  ) : (
    <>
      {comments.length < 1 ? (
        <div>К этому посту нет комментариев</div>
      ) : (
        <div className={s.comments}>
          {comments.map((item) => {
            return (
              <div className={s.comment}>
                <img
                  className={s.user_avatar}
                  src={
                    item.userid.avatar
                      ? `http://localhost:4000/avatar/${item.userid.avatar}`
                      : fakeavatar
                  }
                />
                <div className={s.user_name}>{item.userid.login}</div>
                <div className={s.comment_text}>{item.commentText}</div>
              </div>
            );
          })}
        </div>
      )}
      <div>
        <input
          value={addCom}
          placeholder="Напишите комментарий который хотите добавить"
          onChange={(e) => setAddCom(e.target.value)}
          className={s.add_com}
        />
        <button onClick={addComment} className={s.add_com_click}>
          добавить
        </button>
      </div>
    </>
  );
};

export default Comments;
