import React from 'react';
import s from './Header.module.scss'
import { FaFacebookMessenger } from "react-icons/fa"
import { FiUser } from "react-icons/fi"

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logoCase}>
                <FaFacebookMessenger className={s.logo} />
                <div className={s.name}>Meetmax</div>
            </div>
            <div className={s.user}>
                <div className={s.username}>Firstname Lastname</div>
                <div className={s.imgCase}><FiUser className={s.img} /></div>
            </div>
        </div>
    );
};

export default Header;