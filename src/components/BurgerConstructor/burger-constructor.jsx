import React from "react";
import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../Modal/modal"
import OrderDetails from "../OrderDetails/order-details";
import {
  Button,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-constructor.module.css";
import currIcon from "../../images/vector/currency_icon.svg";

export default function BurgerConstructor() {
//// this states is required to control rendering of Modal component
//const [modalData, setModalData] =
//  useState({isOpened: false, content: null, header: null});
//
//// get ingredients from context
//  const {ingredientsList} = useContext(IngredientsContext);
//
//// this handler is trigered on any action which
//// leads to closing modal window
//function handleCloseModal() {
//  setModalData({isOpened: false, content: null, header: null})
//}
  //
  // this handler is triggered on order button click which
  // leads to opening modal window and server call
//function handleOpenModal() {
//  const ingredientsIds =
//    [bun, ...ingredients, bun].map(ingredient => ingredient["_id"]);
//  getOrderData(ingredientsIds).then(data => {
//      const orderDetailsModalData = {
//        isOpened: true,
//        content: (<OrderDetails orderNumber={data.order.number}/>),
//        header: null
//      }
//      setModalData(orderDetailsModalData);
//  });
//}

  // get available components and currently used component from store
  // then prepare data for rendering, keeping it in usedComponentsList
  const {buns, mains, sauces} = useSelector(store => store.ingredients);
  const {bun, mainsAndSauces} = useSelector(store => store.usedIngredients);

  const usedComponentsList = useMemo(() => {
    const allAvailableComponentsData = [...buns, ...mains, ...sauces];
    const allUsedComponentsIds = [bun, ...mainsAndSauces, bun];
    return allUsedComponentsIds.map(id => (
      allAvailableComponentsData.filter(data => data._id === id).pop()
    ));
  }, [bun, mainsAndSauces, buns, mains, sauces]);

  // this function calculates total cost
  function calculateCost(usedComponentsList) {
    return usedComponentsList.reduce((acc, val) => acc + val.price, 0);
  }

  // memoisation of computations performed by calculateCost() funct
  const calculatedCost =
    useMemo(() => calculateCost(usedComponentsList), [usedComponentsList]);

  return (
    <>
      {/*
        modalData.isOpened &&
          <Modal header={modalData.header} onCloseModal={handleCloseModal}>
            {modalData.content}
          </Modal>
          */}
      <section
        className={`${styles["burger-constructor"]} mt-25 pl-4 pr-4`}
        aria-label="Конструктор бургеров"
      >
        <article className={`${styles["ingredients-list__item"]} ml-8 mb-4`}>
          {
          <ConstructorElement
            text={usedComponentsList[0].name + " (верх)"}
            thumbnail={usedComponentsList[0].image}
            type="top"
            price={usedComponentsList[0].price}
            isLocked={true}
          />
          }
        </article>
        <ul
          className={`${styles["ingredients-list"]}`}
          id="ingredients-list"
        >
          {usedComponentsList.slice(1, -1).map((item, key) =>(
            <li
              className={`${styles["ingredients-list__item-wrapper"]}`}
              key={key}
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
        {
          <article className={`${styles["ingredients-list__item"]} ml-8 mt-4`}>
            <ConstructorElement
              text={
                usedComponentsList[usedComponentsList.length - 1].name +
                  " (низ)"
              }
              thumbnail={
                usedComponentsList[usedComponentsList.length - 1].image
              }
              type="bottom"
              price={usedComponentsList[usedComponentsList.length - 1].price}
              isLocked={true}
            />
          </article>
        }
        <div className={`${styles["ingredients-order-info"]} mt-10`}>
          <span className="text text_type_digits-medium mr-2">
            {calculatedCost}
          </span>
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
            onClick={null}
          >
            Оформить заказ
          </Button>
        </div>
      </section>
    </>
  )
}
