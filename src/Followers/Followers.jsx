import React from "react";
import Follow from "../Follow/Follow";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followersget } from "../features/followersSlice";
import s from "./Followers.module.scss";

const Followers = ({ userid }) => {
  const followers = useSelector((state) => state.followersSlice.followers);
  console.log(followers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(followersget({ userid }));
  }, [dispatch]);

  return (
    <div className={s.wrap}>
      {followers.map((item) => {
        return <Follow user={item} key={item._id}/>;
      })}
    </div>
  );
};

export default Followers;
