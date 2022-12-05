import React from "react";
import styles from "./app-header.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon
}
from "@ya.praktikum/react-developer-burger-ui-components";

export default function AppHeader() {
  // spacing from praktikum UI kit
  const headerSpacings = "pt-4 pb-4 ";
  const navItemSpacings = "pt-4 pb-4 pr-5 pl-5 ";
  const linkSpacings = "ml-2 ";
  const linkTypography = "text text_type_main-default "

  return (
    <header className={headerSpacings + styles.header}>
      <nav className={styles.nav + " " + styles["header__nav"]}>
        <div className={navItemSpacings + styles["nav__item"]}>
          <BurgerIcon type="primary" />
          <a
            className={linkTypography + linkSpacings + styles["nav__item-link"]}
            href="#"
            target="_self"
          >
            Конструктор
          </a>
        </div>
        <div className={navItemSpacings + styles["nav__item"]}>
          <ListIcon type="secondary" />
          <a
            className={
              linkTypography + linkSpacings +
              styles["nav__item-link"] + " " + styles["nav__item-link_inactive"]
            }
            href="#"
            target="_self"
          >
            Лента заказов
          </a>
        </div>
      </nav>
      <Logo className="header__logo" />
      <div className={
          navItemSpacings +
          styles["profile-link"] + " " +
          styles["header__profile-link"]
        }
      >
        <ProfileIcon type="secondary" />
        <a
          className={
            linkTypography + linkSpacings + styles["profile-link__link"] +
            " " + styles["profile-link__link_inactive"]
          }
          href="#"
          target="_self"
        >
          Личный кабинет
        </a>
      </div>
    </header>
  )
}
