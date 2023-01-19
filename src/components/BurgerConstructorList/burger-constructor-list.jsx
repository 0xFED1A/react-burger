import React from "react";
import { useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import PropTypes from 'prop-types';

import { ADD_INGREDIENT } from "../../services/actions/burger-constructor-action";

import styles from "./burger-constructor-list.module.css";

// this component is required as initial dropTarget. If i don't
// have any children inside this componet, it works like drop target,
// but if there are any chilred it behaves like simple wrapper
export default function BurgerConstructorList({children}) {
  const dispatch = useDispatch();

  const ingredientDropConfig = {
    // this component accepts only mains and sauces, both
    // of them should be !isFlat, it means it should be dragged
    // from BurgerIngredients components
    accept: ["main", "sauce"],
    drop: item => dispatch({
        type: ADD_INGREDIENT,
        id: item.id,
        // since i use it only as initial dropTarget, i dont
        // really care about position
        position: 0,
      }),
    collect: (monitor) => ({
      // minHeight used to make some space between buns (unintended joke), to
      // prevent user from pixe lhunting
      minHeight: monitor.canDrop() ? {minHeight: 80} : {minHeight: 0}
    })
  };

  let [{minHeight,}, dropRef] = useDrop(ingredientDropConfig);

  /*
   * take a careful look on ref attribute!!!
   * The problem: BurgerConstructorList keep reaction on drop event
   * even if its happend on its child, which triggers DOUBLE call to reducer
   * i don't know how to solve it in adequate way, so i end up with this
   * dirty hack. Im sorry.
   */
  return (
    <ul
      className={`${styles["ingredients-list"]}`}
      id="ingredients-list"
      ref={children.length > 0 ? null : dropRef}
      style={minHeight}
    >
      {children}
    </ul>
  )
}

BurgerConstructorList.propTypes = {
  // we dont really care on prop type here, we just want it to be
  // renderable, so it might be HTMLElement or node, but i stick
  // with HTMLElement
  chilred: PropTypes.instanceOf(HTMLElement)
}
