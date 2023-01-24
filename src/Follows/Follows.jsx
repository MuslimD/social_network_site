import React from 'react';
import Follow from '../Follow/Follow';
import s from "./Follows.module.scss"

const Follows = (props) => {
    return (
        <div className={s.follows}>
        <Follow/>
        </div>
    );
};

export default Follows;


