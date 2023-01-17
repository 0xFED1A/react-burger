import React from "react";
import {
  Counter,
  CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
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
                <article className={styles.ingredient}>
                  <img
                    className="pl-4 pr-4 pb-2"
                    src={item.data.image}
                    alt={item.data.name}
                  />
                  { item.quantity > 0 &&
                    <Counter count={item.quantity} size={"default"} />
                  }
                  <div className={`${styles["ingredient__price-box"]} mb-2`}>
                    <span className="text text_type_digits-default">
                      {item.data.price}
                    </span>
                    <CurrencyIcon type="primary" />
                  </div>
                  <h5 className={`
                      ${styles["ingredient__item-name"]}
                      text text_type_main-default
                    `}>
                    {item.data.name}
                  </h5>
                </article>
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
