import React from "react";
import { useDrag } from "react-dnd";

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
  //TODO: move ingredientDragConfig to /src/utils/constants.js
  const ingredientDragConfig = {
    type: "ingredient",
    item: {id:"abc"},
    collect: monitor => ({isDragging: monitor.isDragging()})
  }
  const [{ isDragging }, dragRef] = useDrag(ingredientDragConfig);
  /*
   * there are two types of Ingredient component markups available
   * first one is supposed to be used in BurgerIngredients comopnent,
   * while second is "flat", and supposed to be used in BurgerConstructor
   * component ONLY!
   */
  console.log(isDragging);
  return (
    !isFlat ?
      <article className={styles.ingredient} ref={dragRef} draggable>
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
    <article
      className={`
        ${styles["ingredient_flat"]}
        ${type === "top" ? "ml-8 mb-4" : type === "bottom" ? "ml-8 mt-4" : ""}
      `}
      ref={dragRef}
      draggablee
    >
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
