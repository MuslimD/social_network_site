import React from 'react';
import s from './Header.module.scss'
import logo from './images/Logo.png'

const Header = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.logoLeft}><img src={logo} alt="Logo" /></div>
            <div className={s.headerRight}>Имя и аватарка</div>
        </div>
    );
};

export default Header;