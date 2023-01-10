import React from "react"
import { useState, useEffect } from "react";
import AppHeader from "../AppHeader/app-header";
import BurgerIngredients from "../BurgerIngredients/burger-ingredients";
import BurgerConstructor from "../BurgerConstructor/burger-constructor";
import { getIngredientsList } from "../../utils/api";
import IngredientsContext from "../../services/ingredients-context";
import styles from "./app.module.css";

// App component
export default function App() {
  const [ingredientsList, setIngredeintsList] = useState(null);

  useEffect(() => {
    const ingredientsList = getIngredientsList();
    ingredientsList.then(data => setIngredeintsList(data));
  }, []);

  return (ingredientsList &&
    (
      <>
        <AppHeader />
        <main className={styles.main}>
          <IngredientsContext.Provider value={{ingredientsList, setIngredeintsList}}>
            <BurgerIngredients />
            <BurgerConstructor />
          </IngredientsContext.Provider>
        </main>
      </>
    )
  );
}
