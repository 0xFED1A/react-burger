import React from "react";
import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../Modal/modal"
import OrderDetails from "../OrderDetails/order-details";
import Ingredient from "../Ingredient/ingredient";
import BurgerConstructorList from "../BurgerConstructorList/burger-constructor-list";
import { sendIngredientToServer } from "../../services/actions/order-details-action";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-constructor.module.css";
import currIcon from "../../images/vector/currency_icon.svg";

export default function BurgerConstructor() {

  // get currently used components form usedIngredients store,
  // then get all available components data for price calculation
  const {bun, mainsAndSauces} = useSelector(store => store.usedIngredients);
  const {buns, mains, sauces} = useSelector(store => store.ingredients);

  // this array contains prices for each yield from parsing currenlty used
  // components
  const usedComponentsPrices = useMemo(() => {
    const allAvailableComponentsData = [...buns, ...mains, ...sauces];
    const allUsedComponentsIds = [bun, ...mainsAndSauces, bun];
    return allUsedComponentsIds.map(id => (
      allAvailableComponentsData.filter(data => data._id === id).pop().price
    ));
  }, [bun, mainsAndSauces, buns, mains, sauces]);

  // this function calculates total cost, it takes array of prices as
  // arg, and then simply reduces array
  function calculateCost(prices) {
    return prices.reduce((acc, val) => acc + val, 0);
  }

  // memoisation of computations performed by calculateCost() funct
  const calculatedCost =
    useMemo(() => calculateCost(usedComponentsPrices), [usedComponentsPrices]);

  // here we want ot get current order number, we need it to pass as prop
  // to modal
  const currenOrderNumber = useSelector(store => store.order.number);
  const dispatch = useDispatch();

  // current order API call status, we wont open modal window unless
  // apiCallSuccessful equals true
  const {requesting, success, error} = useSelector(store => store.order);
  const apiCallSuccessful = !requesting && success && !error;

  // current modal window state
  const [isModalOpened, setIsModalOpened] = useState(false);

  // this handler is triggered on order button click which
  // leads to opening modal window and server call
  function handleOpenModal() {
    dispatch(sendIngredientToServer([bun, ...mainsAndSauces, bun]));
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
        {/* isFlat prop used for conditional rendering of Ingredient componet
            other props is required for ConstructorElement component inside
            Ingredient component markup
        */}
        <Ingredient
          id={bun}
          index={0}
          isFlat={true}
          position={"top"}
          isLocked={true}
        />
        <BurgerConstructorList>
          {mainsAndSauces.map((item, key) =>(
            <li
              className={`${styles["ingredients-list__item-wrapper"]}`}
              key={key}
            >
              <Ingredient
                id={item}
                index={key}
                isFlat={true}
                isLocked={false}
              />
            </li>
          ))}
        </BurgerConstructorList>
        <Ingredient
          id={bun}
          index={mainsAndSauces.length}
          isFlat={true}
          position={"bottom"}
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
