import React from "react";

import {
  Counter,
  CurrencyIcon,
  ConstructorElement,
  DragIcon
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./ingredient.module.css";

export default function Ingredient({
  isFlat,
  name,
  image,
  price,
  quantity,
  type,
  isLocked
})
{
  return (
    !isFlat ?
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
        <h5 className=
          {
            `${styles["ingredient__item-name"]} text text_type_main-default`
          }
        >
          {name}
        </h5>
      </article>
    :
    <article className={`
        ${styles["ingredient_flat"]}
        ${type === "top" ? "ml-8 mb-4" : type === "bottom" ? "ml-8 mt-4" : ""}
      `}>
      {!isLocked &&
        <DragIcon type="primary" />
      }
      <ConstructorElement
        text={`${name}${type === "top" ? " верх" : type === "bottom" ? " низ" : ""}`}
        thumbnail={image}
        type={type}
        price={price}
        isLocked={isLocked}
      />
    </article>
  );
}
