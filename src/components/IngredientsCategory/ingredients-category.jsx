import React from "react";

import Ingredient from "../Ingredient/ingredient";
import PropTypes from 'prop-types';
import { ingredientObjectProp } from "../../utils/propTypes";

import styles from "./ingredients-category.module.css";

export default function IngredientsCategory({
  categoryName,
  sameCategoryIngredients,
  onButtonClick
}) {
  return (
    <>
      {/* we need to get something like id=`buns-list` */}
      <section
        className="mt-10"
        id={
          sameCategoryIngredients.length &&
          `${sameCategoryIngredients[0].data.type}s-list`
        }
      >
        <h3 className="text text_type_main-medium">{categoryName}</h3>
        <ul className={`${styles.ingredients} mt-6 pl-4 pr-4`}>
          {
            sameCategoryIngredients.map(item => (
              <li
                key={item.data._id}
                onClick={() => onButtonClick(item.data._id)}
              >
                <Ingredient
                  image={item.data.image}
                  name={item.data.name}
                  price={item.data.price}
                  quantity={item.quantity}
                />
              </li>
            ))
          }
        </ul>
      </section>
    </>
  )
}

IngredientsCategory.propTypes = {
  categoryName: PropTypes.string.isRequired,
 // sameCategoryIngredients: PropTypes.arrayOf(ingredientObjectProp.isRequired).isRequired,
 // onButtonClick: PropTypes.func.isRequired
};
