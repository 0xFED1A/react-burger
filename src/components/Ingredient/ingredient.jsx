import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";

import { ADD_INGREDIENT, REMOVE_INGREDIENT, SWAP_INGREDIENT_POSITION } from "../../services/actions/burger-constructor-action";
import {
  Counter,
  CurrencyIcon,
  ConstructorElement,
  DragIcon
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./ingredient.module.css";

/*
 * This is helluva ugly component. It's purpose is to render ingredient data in both
 * BurgerIngredients and BurgerConstructorList components, plus it is also a
 * drag source, and in the same time it is also a drop target
 */
export default function Ingredient({id, isFlat, quantity, position, isLocked, index}) {
  // we need to get some data from available components for rendering
  // so we search through all components and yield image, name, price, type
  const {buns, mains, sauces} = useSelector(store => store.ingredients);
  const allAvailableComponentsData = [...buns, ...mains, ...sauces];
  const {image, name, price, type} =
    allAvailableComponentsData.filter(ingredient => ingredient._id === id).pop();

  const dispatch = useDispatch();

  // this is remove button handler, it remove Ingredient from ingredient store
  function removeHandle() {
    dispatch({type: REMOVE_INGREDIENT, position: index});
  }

  // isBun is used to control list of accepted types in drop target, but it is also
  // used as part of action argument for reducer
  const isBun = type === "bun";
  const accept = isBun ?
    ["bun"] : ["main", "sauce", "bun", "flat-main", "flat-sauce", "flat-bun"];

  const ingredientDragConfig = {
    // we really need to send type to reducer, we dont want to accidently copy
    // ingredient while we trying to sort them! So, "flat" components is
    // supposed to be "sortable" only, while "non flat" is supposed to be
    // "addable" only
    type: isFlat ? `flat-${type}` : type,
    item: {id, position: index, isBun, isFlat},
    collect: monitor => ({isDragging: monitor.isDragging()})
  };
  const [{ isDragging }, dragRef] = useDrag(ingredientDragConfig);

  const ingredientDropConfig = {
    accept,
    drop: item => {
      if (item.isBun) {
        dispatch({
          type: ADD_INGREDIENT,
          isBun: true,
          id: item.id,
        })
      } else {
        if (item.isFlat) {
          dispatch({
            type: SWAP_INGREDIENT_POSITION,
            id: item.id,
            dropPosition: index,
            dragPosition: item.position
          })
        } else {
          dispatch({
            type: ADD_INGREDIENT,
            id: item.id,
            position: index,
          })
        }
      }
    }
  }
  const [{}, dropRef] = useDrop(ingredientDropConfig)

  const opacity = isDragging ? {opacity: "50%"} : {opacity: "100"};

  /*
   * there are two types of Ingredient component markups available
   * first one is supposed to be used in BurgerIngredients comopnent,
   * while second is "flat", and supposed to be used in BurgerConstructor
   * component ONLY!
   */
  return (
    !isFlat ?
      <article
        className={`${styles.ingredient}`}
        ref={dragRef}
        draggable={true}
        style={opacity}
      >
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
      ref={node => {dragRef(node); dropRef(node)}}
      draggable={true}
      style={opacity}
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
        handleClose={removeHandle}
      />
    </article>
  );
}
