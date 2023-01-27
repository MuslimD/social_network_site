import React from "react";
import Follower from "./Follower/Follower";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followersget } from "../features/followersSlice";
import s from "./Followers.module.scss";

const Followers = ({ userid }) => {
  const followers = useSelector((state) => state.followersSlice.followers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(followersget({ userid }));
  }, [dispatch]);

  return (
    <div className={s.wrap}>
      {followers.map((item) => {
        return <Follower userid={userid} user={item} key={item._id} />;
      })}
    </div>
  );
};

export default Followers;
