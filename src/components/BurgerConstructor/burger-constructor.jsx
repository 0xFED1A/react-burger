import React from "react";
import { useState, useMemo } from "react";
import Modal from "../Modal/modal"
import OrderDetails from "../OrderDetails/order-details";
import {
  Button,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import { ingredientObjectProp } from "../../utils/propTypes";
import styles from "./burger-constructor.module.css";
import currIcon from "../../images/vector/currency_icon.svg";

export default function BurgerConstructor({ingredientsList}) {
  // this states is required to control rendering of Modal component
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

  const bun = ingredientsList.find(ingredient => ingredient.type === 'bun');
  const ingredients = ingredientsList.filter(ingredient => ingredient.type !== 'bun');

  // this function calculates total cost
  function calculateCost(ingredients, bun) {
    const bunsPrice = bun.price * 2;
    return ingredients.reduce((acc, val) => acc + val.price, 0) + bunsPrice;
  }

  // memoisation of computations performed by calculateCost() funct
  const calculatedCost = 
    useMemo(() => calculateCost(ingredients, bun), [ingredients, bun]);

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
        <article className={`${styles["ingredients-list__item"]} ml-8 mb-4`}>
          <ConstructorElement
            text={bun.name + " (верх)"}
            thumbnail={bun.image}
            type="top"
            price={bun.price}
            isLocked={true}
          />
        </article>
        <ul
          className={`${styles["ingredients-list"]}`}
          id="ingredients-list"
        >
          {ingredients.map(item =>(
            <li
              className={`${styles["ingredients-list__item-wrapper"]}`}
              key={item._id}
            >
              <article className={`${styles["ingredients-list__item"]}`}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  thumbnail={item.image}
                  price={item.price}
                  isLocked={false}
                />
              </article>
            </li>
          ))}
        </ul>
        <article className={`${styles["ingredients-list__item"]} ml-8 mt-4`}>
          <ConstructorElement
            text={bun.name + " (низ)"}
            thumbnail={bun.image}
            type="bottom"
            price={bun.price}
            isLocked={true}
          />
        </article>
        <div className={`${styles["ingredients-order-info"]} mt-10`}>
          <span className="text text_type_digits-medium mr-2">{calculatedCost}</span>
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
  ingredientsList: PropTypes.arrayOf(ingredientObjectProp.isRequired).isRequired,
};
