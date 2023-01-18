import React from "react";
import { useDrop } from "react-dnd";

import styles from "./burger-constructor-list.module.css";

export default function BurgerConstructorList({children}) {
  const ingredientDropConfig = {
    accept: "ingredient",
    drop: item => console.log(item),
    collect: monitor => ({isOver: monitor.isOver()})
  };

  const [{isOver}, dropRef] = useDrop(ingredientDropConfig);
  return (
    <ul
      className={`${styles["ingredients-list"]}`}
      id="ingredients-list"
      ref={dropRef}
    >
      {children}
    </ul>
  )
}
