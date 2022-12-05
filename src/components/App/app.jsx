import React from "react"
import AppHeader from "../AppHeader/app-header";
import BurgerIngredients from "../BurgerIngredients/bureger-ingredients";
import BurgerConstructor from "../BurgerConstructor/burger-constructor";

import styles from "./app.module.css";

export default function App() {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </>
  )
}
