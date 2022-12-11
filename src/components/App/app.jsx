import React from "react"
import { useState, useEffect } from "react";
import AppHeader from "../AppHeader/app-header";
import BurgerIngredients from "../BurgerIngredients/burger-ingredients";
import BurgerConstructor from "../BurgerConstructor/burger-constructor";
import { getIngredientsList } from "../../utils/api";
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
