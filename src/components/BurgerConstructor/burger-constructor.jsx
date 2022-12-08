import React from "react";
import {
  Button,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-constructor.module.css";
import currIcon from "../../images/vector/currency_icon.svg";

export default function BurgerConstructor(props) {

  // this function calculates height to prevent
  // elements from "slicing" apart when scrolling
  function calcSaneHeight(elemHeight, elemGap) {
    const headerSize = 88;
    const marginTop = 100;
    const marginBottom = 40;
    const paddingBottom = 52;
    const lockedElementsSize = 2 * (elemHeight + elemGap);

    const totalUnavailHeight = headerSize + marginTop + marginBottom +
      paddingBottom + lockedElementsSize;
    const availableHeight = window.innerHeight - totalUnavailHeight;

    if (availableHeight < (elemHeight + elemGap)) {
      return elemHeight;
    } else {
      return (
        // use '|0' hack to imitate fast Math.trunc()
        (availableHeight / (elemHeight + elemGap) | 0) *
          (elemHeight + elemGap) - elemGap
      );
    }
  }

  // this function generates markup from passed props
  // populating ingredients list which allready in current burger
  function populateUsedIngredients() {
    const allIngredients = props.ingredientsList;
    const topIngredient = allIngredients[0];
    const middleIngredients =
      [...allIngredients].slice(1, allIngredients.length - 1);
    const bottomIngredient = allIngredients[allIngredients.length - 1];

    return (
      <>
        <article className={`${styles["ingredients-list__item"]} ml-8 mb-4`}>
          <ConstructorElement
            text={topIngredient.name}
            thumbnail={topIngredient.image}
            type="top"
            price={topIngredient.price}
            isLocked={true}
            extraClass=""
            handleClose={() => console.log("Handler Ok!")}
          />
        </article>
        <ul
          className={`${styles["ingredients-list"]}`}
          style={{maxHeight: calcSaneHeight(80, 16)}}
          id="ingredients-list"
        >
          {middleIngredients.map(item =>(
            <li
              className={`${styles["ingredients-list__item-wrapper"]}`}
              key={item["_id"]}
            >
              <article className={`${styles["ingredients-list__item"]}`}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  thumbnail={item.image}
                  price={item.price}
                  isLocked={false}
                  extraClass=""
                  handleClose={() => console.log("Handler Ok!")}
                />
              </article>
            </li>
          ))}
        </ul>
        <article className={`${styles["ingredients-list__item"]} ml-8 mt-4`}>
          <ConstructorElement
            text={bottomIngredient.name}
            thumbnail={bottomIngredient.image}
            type="bottom"
            price={bottomIngredient.price}
            isLocked={true}
            extraClass=""
            handleClose={() => console.log("Handler Ok!")}
          />
        </article>
      </>
    )
  }

  return (
    <section
      className={`${styles["burger-constructor"]} mt-25 pl-4 pr-4`}
      aria-label="Конструктор бургеров"
    >
      {populateUsedIngredients()}
      <div className={`${styles["ingredients-order-info"]} mt-10`}>
        <span className="text text_type_digits-medium mr-2">610</span>
        <img
          src={currIcon}
          alt="Валюта"
          width="36px"
          height="36px"
        />
        <Button htmlType="button" type="primary" size="large" extraClass="mr-8 ml-10">
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}
