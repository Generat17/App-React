import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.Nav}>
            <ul>
                <li><NavLink to="/Profile" activeClassName={s.activeLink}>Профиль</NavLink></li>
                <li><NavLink to="/Dialogs" activeClassName={s.activeLink}>Сообщения</NavLink></li>
                <li><NavLink to="/Users" activeClassName={s.activeLink}>Пользователи</NavLink></li>
                <li><a>Новости</a></li>
                <li><a>Музыка</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;