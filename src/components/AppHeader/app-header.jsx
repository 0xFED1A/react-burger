import React from "react";
// import components from Practikum UI Kit
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon
}
from "@ya.praktikum/react-developer-burger-ui-components";

// import custom styles as css-modules and UI kit styles
import styles from "./app-header.module.css";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css?module"
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css?module";

// AppHeader component
export default function AppHeader() {
  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <nav className={`${styles.nav} ${styles["header__nav"]}`}>
        <div className={`pt-4 pb-4 pr-5 pl-5 ${styles["nav__item"]}`}>
          <BurgerIcon type="primary" />
          <a
            className={`text text_type_main-default ml-2 ${styles["nav__item-link"]}`}
            href="#"
            target="_self"
          >
            Конструктор
          </a>
        </div>
        <div className={`pt-4 pb-4 pr-5 pl-5 ${styles["nav__item"]}`}>
          <ListIcon type="secondary" />
          <a
            className= {`text text_type_main-default ml-2
              ${styles["nav__item-link"]} ${styles["nav__item-link_inactive"]}`}
            href="#"
            target="_self"
          >
            Лента заказов
          </a>
        </div>
      </nav>
      <Logo className="header__logo" />
      <div className={`pt-4 pb-4 pr-5 pl-5 ${styles["profile-link"]}
        ${styles["header__profile-link"]}`}
      >
        <ProfileIcon type="secondary" />
        <a
          className={`text text_type_main-default ml-2
            ${styles["profile-link__link"]} ${styles["profile-link__link_inactive"]}`}
          href="#"
          target="_self"
        >
          Личный кабинет
        </a>
      </div>
    </header>
  )
}
