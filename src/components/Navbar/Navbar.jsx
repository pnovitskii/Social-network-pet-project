import React from 'react';
import s from'./Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a> Профиль </a>
      </div>
      <div className={s.item}>
        <a> Сообщения </a>
      </div>
      <div className={s.item}>
        <a> Новости </a>
      </div>
      <div className={s.item}>
        <a> Музыка </a>
      </div>
      <div className={s.item}>
        <a> Настройки </a>
      </div>
    </nav>
  )
}

export default Navbar;