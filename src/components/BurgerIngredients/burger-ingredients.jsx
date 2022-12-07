import React from "react";
import {
  Tab,
  Counter,
  CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-ingredients.module.css";

export default function BurgerIngredients() {
  return (
      <section className={`${styles["burger-ingredients"]} mt-10`}>
        <h1 className={`text text_type_main-large`}>
          Соберите бургер
        </h1>
        <div className={`${styles["tab-box"]} mt-5`}>
          <Tab active={true}>Булки</Tab>
          <Tab>Соусы</Tab>
          <Tab>Начинки</Tab>
        </div>
        <section className="mt-10">
          <h3 className="text text_type_main-medium">Булки</h3> 
          <ul className={`${styles.list} mt-6 p-4`}>
            <li>
              <article className={styles["list-item"]}>
                <img 
                  className="pl-4 pr-4 pb-2"
                  src="https://via.placeholder.com/240x120" 
                  alt="" 
                />
                <Counter count={1} size={"default"} extraClass="" />
                <div className={`${styles["list-item__price-box"]} mb-2`}>
                  <span className="text text_type_digits-default">20</span>
                  <CurrencyIcon type="primary" />
                </div>
                <h5 className={`${styles["list-item__item-name"]} text text_type_main-default`}>
                  Краторная булка N-200i
                </h5>
              </article> 
            </li>
            <li>
              <article className={styles["list-item"]}>
                <img 
                  className="pl-4 pr-4 pb-2"
                  src="https://via.placeholder.com/240x120" 
                  alt="" 
                />
                <Counter count={1} size={"default"} extraClass="" />
                <div className={`${styles["list-item__price-box"]} mb-2`}>
                  <span className="text text_type_digits-default">20</span>
                  <CurrencyIcon type="primary" />
                </div>
                <h5 className={`${styles["list-item__item-name"]} text text_type_main-default`}>
                  Краторная булка N-200i
                </h5>
              </article> 
            </li>
            <li>
              <article className={styles["list-item"]}>
                <img 
                  className="pl-4 pr-4 pb-2"
                  src="https://via.placeholder.com/240x120" 
                  alt="" 
                />
                <Counter count={1} size={"default"} extraClass="" />
                <div className={`${styles["list-item__price-box"]} mb-2`}>
                  <span className="text text_type_digits-default">20</span>
                  <CurrencyIcon type="primary" />
                </div>
                <h5 className={`${styles["list-item__item-name"]} text text_type_main-default`}>
                  Краторная булка N-200i
                </h5>
              </article> 
            </li>
            <li>
              <article className={styles["list-item"]}>
                <img 
                  className="pl-4 pr-4 pb-2"
                  src="https://via.placeholder.com/240x120" 
                  alt="" 
                />
                <Counter count={1} size={"default"} extraClass="" />
                <div className={`${styles["list-item__price-box"]} mb-2`}>
                  <span className="text text_type_digits-default">20</span>
                  <CurrencyIcon type="primary" />
                </div>
                <h5 className={`${styles["list-item__item-name"]} text text_type_main-default`}>
                  Краторная булка N-200i
                </h5>
              </article> 
            </li>
          </ul>
        </section>
      </section>
  )
}
