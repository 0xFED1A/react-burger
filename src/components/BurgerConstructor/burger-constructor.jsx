// React import
import React from "react";
import { useState } from "react";
// custom components import
import Modal from "../Modal/modal"
import OrderDetails from "../OrderDetails/order-details";
// UI Kit import
import {
  Button,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
// utils import
import PropTypes from 'prop-types';
import { ingredientObjectProp } from "../../utils/propTypes";
// styles import
import styles from "./burger-constructor.module.css";
import currIcon from "../../images/vector/currency_icon.svg";

export default function BurgerConstructor(props) {
  // this states is required to control rendering
  // of Modal component
  const [modalData, setModalData] =
    useState({isOpened: false, content: null, header: null});

  // this handler is triggered on order button click which
  // leads to opening modal window
  function handleOpenModal() {
    const orderDetailsModalData = {
      isOpened: true,
      content: (<OrderDetails />),
      header: null
    }
    setModalData(orderDetailsModalData);
  }

  // this handler is trigered on any action which
  // leads to closing modal window
  function handleCloseModal() {
    setModalData({isOpened: false, content: null, header: null})
  }

  // this function calculates total cost
  function calculateCost(arr) {
    return props.ingredientsList.reduce((acc, val) => acc + val.price, 0);
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
          />
        </article>
        <ul
          className={`${styles["ingredients-list"]}`}
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
          />
        </article>
      </>
    )
  }

  return (
    <>
      {
        modalData.isOpened &&
          <Modal header={modalData.header} onCloseModal={handleCloseModal}>
            {modalData.content}
          </Modal>
      }
      <section
        className={`${styles["burger-constructor"]} mt-25 pl-4 pr-4`}
        aria-label="Конструктор бургеров"
      >
        {populateUsedIngredients()}
        <div className={`${styles["ingredients-order-info"]} mt-10`}>
          <span className="text text_type_digits-medium mr-2">{calculateCost()}</span>
          <img
            src={currIcon}
            alt="Валюта"
            width="36px"
            height="36px"
          />
          <Button
            htmlType="button"
            type="primary"
            size="large"
            extraClass="mr-8 ml-10"
            onClick={handleOpenModal}
          >
            Оформить заказ
          </Button>
        </div>
      </section>
    </>
  )
}

BurgerConstructor.propTypes = {
  ingredientsList: PropTypes.arrayOf(ingredientObjectProp).isRequired,
};
