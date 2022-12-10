import React from "react";
// import components from Practikum UI Kit
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon
}
from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";

// AppHeader component
export default function AppHeader() {
  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <nav className={`${styles.nav} ${styles["header__nav"]}`}>
        <a
          className={`
            pt-4 pb-4 pr-5 pl-5 text text_type_main-default
            ${styles["nav__item-link"]}
          `}
          href="#"
          target="_self"
        >
          <BurgerIcon type="primary" />
          Конструктор
        </a>
        <a
          className= {`
            pt-4 pb-4 pr-5 pl-5 ml-2 text text_type_main-default
            text text_type_main-default 
            ${styles["nav__item-link"]} ${styles["nav__item-link_inactive"]}
          `}
          href="#"
          target="_self"
        >
          <ListIcon type="secondary" />
          Лента заказов
        </a>
      </nav>
      <Logo className="header__logo" />
      {/* i need this wrapper to override mrg: 0 on text class */}
      <div className={styles["profile-link-wrapper"]}>
        <a
          className={`
            pt-4 pb-4 pr-5 pl-5 ${styles["profile-link_inactive"]}
            ${styles["profile-link"]} ${styles["header__profile-link"]}
            text text_type_main-default
          `}
          href="#"
          target="_self"
        >
          <ProfileIcon type="secondary" />
          Личный кабинет
        </a>
      </div>
    </header>
  )
}
