import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import headerStyles from "./app-header.module.css";

export default function AppHeader() {
  return (
    <header className="header">
      <nav className="header__nav nav">
        <div className="nav__nav-item nav-item">
          <BurgerIcon className="nav-item__icon" type="primary" />
          <a className="nav-item__link" href="#" target="_self">
            Конструктор
          </a>
        </div>
        <div className="nav__nav-item nav-item">
          <a className="nav-item__link" href="#" target="_self">
            Лента заказов
          </a>
        </div>
      </nav>
      <Logo className="header__logo" />
      <div className="hearder__link-item link-item">

      </div>
    </header>
  )
}
