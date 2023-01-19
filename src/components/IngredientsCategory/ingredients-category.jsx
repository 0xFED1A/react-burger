import React from "react";
import PropTypes from 'prop-types';

import Ingredient from "../Ingredient/ingredient";
import { sameCategoryIngredientProp } from "../../utils/propTypes";

import styles from "./ingredients-category.module.css";

export default function IngredientsCategory({
  categoryName,
  categoryType,
  sameCategoryIngredients,
  onButtonClick
}) {
  return (
      <section
        className="mt-10"
        id={ sameCategoryIngredients.length && `${categoryType}-list`}
      >
        <h3 className="text text_type_main-medium">{categoryName}</h3>
        <ul className={`${styles.ingredients} mt-6 pl-4 pr-4`}>
          {
            sameCategoryIngredients.map(item => (
              <li
                key={item.id}
                onClick={() => onButtonClick(item.id)}
              >
                <Ingredient
                  id={item.id}
                  isFlat={false}
                  quantity={item.quantity}
                />
              </li>
            ))
          }
        </ul>
      </section>
  )
}

IngredientsCategory.propTypes = {
  categoryName: PropTypes.string.isRequired,
  categoryType: PropTypes.string.isRequired,
  sameCategoryIngredients:
    PropTypes.arrayOf(sameCategoryIngredientProp.isRequired).isRequired,
  onButtonClick: PropTypes.func.isRequired
};
