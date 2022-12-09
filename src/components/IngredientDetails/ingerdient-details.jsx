import React from "react";

import styles from "./ingerdient-details.module.css"

export default function IngredientDetails(props) {
  return (
    <div className={`${styles["ingredient-details"]} mt-4`}>
      <p>034536</p>
      <p>идентификатор заказа</p>
      <div className={`${styles["ingredient-details__image"]}`}></div>
    </div>
  )
}
