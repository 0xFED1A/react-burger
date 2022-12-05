import React from "react"
import styles from "./bureger-ingredients.module.css";
import {
  Tab
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function BurgerIngredients() {
  // spacing from praktikum UI kit
  return (
      <section className={styles["burger-ingredients"]}>
        <h1>Соберите бургер</h1>
        <div className={styles["tab-box"]}>
          <Tab>Булки</Tab>
          <Tab>Соусы</Tab>
          <Tab>Начинки</Tab>
        </div>
      </section>
  )
}
