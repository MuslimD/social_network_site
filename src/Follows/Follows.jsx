import React from "react";
import Follow from "./Follow/Follow";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followsget } from "../features/followsSlice";
import s from "./Follows.module.scss";

const Follows = ({ userid }) => {
  const follows = useSelector((state) => state.followsSlice.follows);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(followsget({ userid }));
  }, [dispatch]);
  return (
    <div className={s.wrap}>
      {follows.map((item) => {
        return <Follow user={item} />;
      })}
    </div>
  );
};

export default Follows;
