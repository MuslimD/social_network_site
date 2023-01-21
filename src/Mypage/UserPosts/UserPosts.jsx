import React, { useEffect, useState } from "react";
import { BiLike } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";
import s from "./UserPosts.module.scss";
import { getpostsuserid } from "../../features/postsSlice";
import { useDispatch, useSelector } from "react-redux";

const UserPosts = ({ userid, setIdCom }) => {
  const postsload = useSelector((state) => state.postsSlice.postsload);
  const posts = useSelector((state) => state.postsSlice.posts);
  const dispatch = useDispatch();
  const [posts_input, Setposts_input] = useState("");
  useEffect(() => {
    dispatch(getpostsuserid({ userid }));
  }, [dispatch]);

  return (
    <div className={s.wrapper_left}>
      
      <div>
        <div>
          <button className={s.addpost_photo}>+</button>
          <input
            className={s.posts_input}
            onChange={(e) => Setposts_input(e.target.value)}
            value={posts_input}
            placeholder="Описание к посту"
          />
          <button className={s.addpost_button}>Запостить</button>
        </div>
      </div>
      {posts.map((item) => {
        return (
          <div className={s.content}>
            <div className={s.text}>{item.text}</div>
            {item.photo && (
              <img
                src={`http://localhost:4000/postsphoto/${item.photo}`}
                alt="Фото поста"
              />
            )}
            <div className={s.posts_buttons}>
              <BiCommentDetail
                className={s.comment}
                onClick={() => setIdCom(item._id)}
              />
              <BiLike className={s.like} />
              <div className={s.counter_likes}>{item.likes.length}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserPosts;
