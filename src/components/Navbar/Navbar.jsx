import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.Nav}>
            <ul>
                <li>Профиль</li>
                <li>Новости</li>
                <li>Сообщения</li>
                <li>Музыка</li>
            </ul>
        </nav>
    );
}

export default Navbar;