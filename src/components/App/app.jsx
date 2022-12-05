import React from "react"
import AppHeader from "../AppHeader/app-header";
import BurgerIngredients from "../BurgerIngredients/bureger-ingredients";
import BurgerConstructor from "../BurgerConstructor/burger-constructor";

import appStyles from "./app.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

export default function App() {
  return (
    <>
      <AppHeader />
      <h1>Соберите бургер</h1>
      <Tab>Булки</Tab>
      <Tab>Соусы</Tab>
      <Tab>Начинки</Tab>
      <BurgerIngredients />
      <BurgerConstructor />
    </>
  )
}
