import React from "react"
import AppHeader from "../AppHeader/app-header";
import BurgerIngredients from "../BurgerIngredients/bureger-ingredients";
import BurgerConstructor from "../BurgerConstructor/burger-constructor";

export default function App() {
  return (
    <>
      <AppHeader />
      <h1>Соберите бургер</h1>
      <BurgerIngredients />
      <BurgerConstructor />
    </>
  )
}
