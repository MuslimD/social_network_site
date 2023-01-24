import React from 'react';
import Follow from '../Follow/Follow';
import s from "./Followers.module.scss"

const Followers = (props) => {
    return (
      <div className={s.followers}>
      <Follow/>
      </div>
    );
};

export default Followers;