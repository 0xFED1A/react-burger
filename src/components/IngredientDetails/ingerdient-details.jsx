import React from "react";
import { useSelector} from "react-redux";

import styles from "./ingerdient-details.module.css"

export default function IngredientDetails() {
  const currentPreviewingIngredientId =
    useSelector(store => store.ingredient.id);
  const {buns, mains, sauces} =
    useSelector(store => store.ingredients);

  const ingredient = [...buns, ...mains, ...sauces]
    .find(item => item._id === currentPreviewingIngredientId);

  return (
    <div className={`${styles["ingredient-details"]}`}>
      <img src={ingredient.image_large} alt={ingredient.name} />
      <h3 className="text text_type_main-medium mt-4">{ingredient.name}</h3>
      <div className={`${styles["ingredient-details__stats"]} mt-8 mb-15`}>
        <div className={`${styles["ingredient-details__stat"]}`}>
          <p className="text text_type_main-default text_color_inactive">
            Калории, ккал
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {ingredient.calories}
          </p>
        </div>
        <div className={`${styles["ingredient-details__stat"]}`}>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {ingredient.proteins}
          </p>
        </div>
        <div className={`${styles["ingredient-details__stat"]}`}>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {ingredient.fat}
          </p>
        </div>
        <div className={`${styles["ingredient-details__stat"]}`}>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {ingredient.carbohydrates}
          </p>
        </div>
      </div>
    </div>
  );
}
