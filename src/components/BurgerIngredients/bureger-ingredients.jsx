import React from "react"
import styles from "./bureger-ingredients.module.css";
import {
  Tab
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function BurgerIngredients() {
  // spacing and typography from praktikum UI kit
  const headingTypography = "text text_type_main-large ";
  const headingSpacings = "mt-10 ";
  const tabBoxSpacings = "mt-5 ";
  return (
      <section className={styles["burger-ingredients"]}>
        <h1 className={headingTypography + headingSpacings + styles.heading}>
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
