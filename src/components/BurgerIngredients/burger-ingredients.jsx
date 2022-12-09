import React from "react";
import { useState } from "react";
import {
  Tab,
  Counter,
  CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../IngredientDetails/ingerdient-details";

import styles from "./burger-ingredients.module.css";

export default function BurgerIngredients(props) {
  const [currentTab, setTab] = useState("bun");
  function tabSwitchHandler(value) {
    setTab(value);
  }

  function handleComponentClick(event) {
    const componentToPass =
      props.ingredientsList.filter(item => item["_id"] === event.currentTarget.id).pop();
    props.onOpenModal(<IngredientDetails ingredient={componentToPass} />) ;
  }

  // this function generates markup from passed props
  // populating ingredients list which available for
  // burger construction
  function populateAvailableIngredients(ingredientType) {
    const ingredientsList =
      props.ingredientsList.filter(item => item.type == ingredientType);
    return (
      <>
        {
          ingredientsList.map(item => (
            <li
              key={item["_id"]}
              id={item["_id"]}
              onClick={handleComponentClick}
            >
              <article className={styles["list-item"]}>
                <img
                  className="pl-4 pr-4 pb-2"
                  src={item.image}
                  alt={item.name}
                />
                <Counter count={1} size={"default"} extraClass="" />
                <div className={`${styles["list-item__price-box"]} mb-2`}>
                  <span className="text text_type_digits-default">
                    {item.price}
                  </span>
                  <CurrencyIcon type="primary" />
                </div>
                <h5 className={`${styles["list-item__item-name"]} text text_type_main-default`}>
                  {item.name}
                </h5>
              </article>
            </li>
          ))
        }
      </>
    );
  }

  return (
      <section className={`${styles["burger-ingredients"]} mt-10`}>
        <h1 className={`text text_type_main-large`}>
          Соберите бургер
        </h1>
        <div className={`${styles["tab-box"]} mt-5`}>
          <Tab value="bun" active={currentTab === "bun"} onClick={tabSwitchHandler}>
            Булки
          </Tab>
          <Tab value="sauce" active={currentTab === "sauce"} onClick={tabSwitchHandler}>
            Соусы
          </Tab>
          <Tab value="main" active={currentTab === "main"} onClick={tabSwitchHandler}>
            Начинки
          </Tab>
        </div>
        <div className={styles["list-wrapper"]}>
          <section className="mt-10">
            <h3 className="text text_type_main-medium">Булки</h3>
            <ul className={`${styles.list} mt-6 pl-4 pr-4`}>
              {populateAvailableIngredients("bun")}
            </ul>
          </section>
          <section className="mt-10">
            <h3 className="text text_type_main-medium">Соусы</h3>
            <ul className={`${styles.list} mt-6 pl-4 pr-4`}>
              {populateAvailableIngredients("sauce")}
            </ul>
          </section>
          <section className="mt-10">
            <h3 className="text text_type_main-medium">Основное</h3>
            <ul className={`${styles.list} mt-6 pl-4 pr-4`}>
              {populateAvailableIngredients("main")}
            </ul>
          </section>
        </div>
      </section>
  )
}
