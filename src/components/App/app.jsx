import React from "react"
import AppHeader from "../AppHeader/app-header";
import BurgerIngredients from "../BurgerIngredients/burger-ingredients";
import BurgerConstructor from "../BurgerConstructor/burger-constructor";
import hardCodedData from "../../utils/data";

import styles from "./app.module.css";

export default function App() {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients ingredientsList={hardCodedData} />
        <BurgerConstructor ingredientsList={hardCodedData} />
      </main>
    </>
  )
}
