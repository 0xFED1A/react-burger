import React from "react";
import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../Modal/modal"
import OrderDetails from "../OrderDetails/order-details";
import Ingredient from "../Ingredient/ingredient";
import { sendIngredientToServer } from "../../services/actions/order-details-action";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-constructor.module.css";
import currIcon from "../../images/vector/currency_icon.svg";

export default function BurgerConstructor() {

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

  // current order number
  const currenOrderNumber = useSelector(store => store.order.number);
  const dispatch = useDispatch();

  // current order API call status
  const {requesting, success, error} = useSelector(store => store.order);
  const apiCallSuccessful = !requesting && success && !error;

  // current modal window state
  const [isModalOpened, setIsModalOpened] = useState(false);

  // this handler is triggered on order button click which
  // leads to opening modal window and server call
  function handleOpenModal() {
    dispatch(sendIngredientToServer(usedComponentsList));
    setIsModalOpened(true);
  }

  // this handler is trigered on any action which
  // leads to closing modal window
  function handleCloseModal() {
    setIsModalOpened(false);
  }

  return (
    <>
      {
        apiCallSuccessful && isModalOpened &&
          <Modal header={null} onCloseModal={handleCloseModal}>
            <OrderDetails orderNumber={currenOrderNumber} />
          </Modal>
      }
      <section
        className={`${styles["burger-constructor"]} mt-25 pl-4 pr-4`}
        aria-label="Конструктор бургеров"
      >
        <Ingredient
          isFlat={true}
          name={usedComponentsList[0].name}
          image={usedComponentsList[0].image}
          price={usedComponentsList[0].price}
          type={"top"}
          isLocked={true}
        />
        <ul
          className={`${styles["ingredients-list"]}`}
          id="ingredients-list"
        >
          {usedComponentsList.slice(1, -1).map((item, key) =>(
            <li
              className={`${styles["ingredients-list__item-wrapper"]}`}
              key={key}
            >
              <Ingredient
                isFlat={true}
                name={item.name}
                image={item.image}
                price={item.price}
                isLocked={false}
              />
            </li>
          ))}
        </ul>
        <Ingredient
          isFlat={true}
          name={usedComponentsList[usedComponentsList.length - 1].name}
          image={usedComponentsList[usedComponentsList.length - 1].image}
          price={usedComponentsList[usedComponentsList.length - 1].price}
          type={"bottom"}
          isLocked={true}
        />
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
            onClick={handleOpenModal}
          >
            Оформить заказ
          </Button>
        </div>
      </section>
    </>
  )
}
