import React from "react"
import { useState, useEffect } from "react";
import AppHeader from "../AppHeader/app-header";
import BurgerIngredients from "../BurgerIngredients/burger-ingredients";
import BurgerConstructor from "../BurgerConstructor/burger-constructor";

import styles from "./app.module.css";

export default function App() {
  const URL = "https://norma.nomoreparties.space/api/ingredients";
  const [ingredientsList, setIngredeintsList] = useState(null);
  useEffect(() => {
    const getIngredientsList = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setIngredeintsList(data.data);
    };
    getIngredientsList();
  }, [])

  if(!ingredientsList) {
    return null;
  } else {
    return (
      <>
        <AppHeader />
        <main className={styles.main}>
          <BurgerIngredients ingredientsList={ingredientsList} />
          <BurgerConstructor ingredientsList={ingredientsList} />
        </main>
      </>
    )
  }
}
