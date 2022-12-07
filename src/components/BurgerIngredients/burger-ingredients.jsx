import React from "react";
import {
  Tab,
  Counter,
  CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-ingredients.module.css";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css?module";

export default function BurgerIngredients() {
  // spacing and typography from praktikum UI kit
  const headingTypography = " text text_type_main-large ";
  const headingSpacings = " mt-10 ";
  const tabBoxSpacings = " mt-5 ";

  return (
      <section className={styles["burger-ingredients"]}>
        <h1 className={styles.heading + headingSpacings}>
          Соберите бургер
        </h1>
        <div className={tabBoxSpacings + styles["tab-box"]}>
          <Tab active={true}>Булки</Tab>
          <Tab>Соусы</Tab>
          <Tab>Начинки</Tab>
        </div>
      </section>
  )
}
