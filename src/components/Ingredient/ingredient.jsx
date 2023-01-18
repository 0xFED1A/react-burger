import React from "react";

import {
  Counter,
  CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./ingredient.module.css";

export default function Ingredient({name, price, image, quantity}) {
  return (
      <article className={styles.ingredient}>
        <img className="pl-4 pr-4 pb-2" src={image} alt={name} />
        { quantity > 0 &&
          <Counter count={quantity} size={"default"} />
        }
        <div className={`${styles["ingredient__price-box"]} mb-2`}>
          <span className="text text_type_digits-default">
            {price}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <h5 className={`${styles["ingredient__item-name"]} text text_type_main-default`}>
          {name}
        </h5>
      </article>
  );
}
