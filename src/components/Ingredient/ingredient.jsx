import React from "react";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";

import {
  Counter,
  CurrencyIcon,
  ConstructorElement,
  DragIcon
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./ingredient.module.css";

export default function Ingredient({id, isFlat, quantity, position, isLocked}) {
  // get ingredient data from store for rendering
  const {buns, mains, sauces} = useSelector(store => store.ingredients);
  const allAvailableComponentsData = [...buns, ...mains, ...sauces];
  const {image, name, price} =
    allAvailableComponentsData.filter(ingredient => ingredient._id === id).pop();

  // TODO: move ingredientDragConfig to /src/utils/constants.js
  const ingredientDragConfig = {
    type: "ingredient",
    item: {id},
    collect: monitor => ({isDragging: monitor.isDragging()})
  };

  const [{ isDragging }, dragRef] = useDrag(ingredientDragConfig);
  /*
   * there are two types of Ingredient component markups available
   * first one is supposed to be used in BurgerIngredients comopnent,
   * while second is "flat", and supposed to be used in BurgerConstructor
   * component ONLY!
   */
  return (
    !isFlat ?
      <article className={styles.ingredient} ref={dragRef} draggable={true}>
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
        ${position === "top" ? "ml-8 mb-4" : position === "bottom" ? "ml-8 mt-4" : ""}
      `}
      ref={dragRef}
      draggable={true}
    >
      {!isLocked &&
        <DragIcon type="primary" />
      }
      <ConstructorElement
        text={`${name}${position === "top" ? " верх" : position === "bottom" ? " низ" : ""}`}
        thumbnail={image}
        type={position}
        price={price}
        isLocked={isLocked}
      />
    </article>
  );
}
