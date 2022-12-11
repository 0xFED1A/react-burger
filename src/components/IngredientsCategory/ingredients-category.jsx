import React from "react";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredients-category.module.css";

export default function IngredientsCategory({
  sameTypeIngredients,
  onButtonClick,
  categoryName
}) {
  return (
    <>
      <section className="mt-10">
        <h3 className="text text_type_main-medium">{categoryName}</h3>
        <ul className={`${styles.ingredients} mt-6 pl-4 pr-4`}>
          {
            sameTypeIngredients.map(item => {
              <li
                key={item._id}
                onClick={() => onButtonClick(item._id)}
              >
                <article className={styles.ingredient}>
                  <img
                    className="pl-4 pr-4 pb-2"
                    src={item.image}
                    alt={item.name}
                  />
                  <Counter count={1} size={"default"} extraClass="" />
                  <div className={`${styles["ingredient__price-box"]} mb-2`}>
                    <span className="text text_type_digits-default">
                      {item.price}
                    </span>
                    <CurrencyIcon type="primary" />
                  </div>
                  <h5 className={`
                      ${styles["ingredient__item-name"]}
                      text text_type_main-default
                    `}>
                    {item.name}
                  </h5>
                </article>
              </li>
            })
          }
        </ul>
      </section>
    </>
  )
}
