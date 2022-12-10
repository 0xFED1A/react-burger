// React import
import React from "react"
import { useState, useEffect } from "react";
// custom components import
import AppHeader from "../AppHeader/app-header";
import BurgerIngredients from "../BurgerIngredients/burger-ingredients";
import BurgerConstructor from "../BurgerConstructor/burger-constructor";
// utils import
import { getIngredientsList } from "../../utils/api";
// styles import
import styles from "./app.module.css";

// App component
export default function App() {
  const [ingredientsList, setIngredeintsList] = useState(null);

  useEffect(() => {getIngredientsList(setIngredeintsList)}, []);

  return (ingredientsList &&
    (
      <>
        <AppHeader />
        <main className={styles.main}>
          <BurgerIngredients
            ingredientsList={ingredientsList}
          />
          <BurgerConstructor
            ingredientsList={ingredientsList}
          />
        </main>
      </>
    )
  );
}
