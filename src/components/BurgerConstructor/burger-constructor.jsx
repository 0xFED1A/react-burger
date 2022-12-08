import React from "react";
import {
  Button,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-constructor.module.css";
import currIcon from "../../images/vector/currency_icon.svg";

export default function BurgerConstructor() {
  return (
    <section
      className={`${styles["burger-constructor"]} mt-25 pl-4 pr-4`}
      aria-label="Конструктор бургеров"
    >
      <article className={`${styles["ingredients-list__item"]} ml-8 mb-4`}>
        <ConstructorElement
          text="Краторная булка N-200i (верх)"
          thumbnail="https://via.placeholder.com/80x40"
          type="top"
          price={200}
          isLocked={true}
          extraClass=""
          handleClose={() => console.log("Handler Ok!")}
        />
      </article>
      <ul className={`${styles["ingredients-list"]}`}>
        <li className={`${styles["ingredients-list__item-wrapper"]}`}>
          <article className={`${styles["ingredients-list__item"]}`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              thumbnail="https://via.placeholder.com/80x40"
              price={200}
              isLocked={false}
              extraClass=""
              handleClose={() => console.log("Handler Ok!")}
            />
          </article>
        </li>
        <li className={`${styles["ingredients-list__item-wrapper"]}`}>
          <article className={`${styles["ingredients-list__item"]}`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              thumbnail="https://via.placeholder.com/80x40"
              price={200}
              isLocked={false}
              extraClass=""
              handleClose={() => console.log("Handler Ok!")}
            />
          </article>
        </li>
        <li className={`${styles["ingredients-list__item-wrapper"]}`}>
          <article className={`${styles["ingredients-list__item"]}`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              thumbnail="https://via.placeholder.com/80x40"
              price={200}
              isLocked={false}
              extraClass=""
              handleClose={() => console.log("Handler Ok!")}
            />
          </article>
        </li>
        <li className={`${styles["ingredients-list__item-wrapper"]}`}>
          <article className={`${styles["ingredients-list__item"]}`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              thumbnail="https://via.placeholder.com/80x40"
              price={200}
              isLocked={false}
              extraClass=""
              handleClose={() => console.log("Handler Ok!")}
            />
          </article>
        </li>
        <li className={`${styles["ingredients-list__item-wrapper"]}`}>
          <article className={`${styles["ingredients-list__item"]}`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              thumbnail="https://via.placeholder.com/80x40"
              price={200}
              isLocked={false}
              extraClass=""
              handleClose={() => console.log("Handler Ok!")}
            />
          </article>
        </li>
        <li className={`${styles["ingredients-list__item-wrapper"]}`}>
          <article className={`${styles["ingredients-list__item"]}`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              thumbnail="https://via.placeholder.com/80x40"
              price={200}
              isLocked={false}
              extraClass=""
              handleClose={() => console.log("Handler Ok!")}
            />
          </article>
        </li>
        <li className={`${styles["ingredients-list__item-wrapper"]}`}>
          <article className={`${styles["ingredients-list__item"]}`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              thumbnail="https://via.placeholder.com/80x40"
              price={200}
              isLocked={false}
              extraClass=""
              handleClose={() => console.log("Handler Ok!")}
            />
          </article>
        </li>
        <li className={`${styles["ingredients-list__item-wrapper"]}`}>
          <article className={`${styles["ingredients-list__item"]}`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              thumbnail="https://via.placeholder.com/80x40"
              price={200}
              isLocked={false}
              extraClass=""
              handleClose={() => console.log("Handler Ok!")}
            />
          </article>
        </li>
      </ul>
      <article className={`${styles["ingredients-list__item"]} ml-8 mt-4`}>
        <ConstructorElement
          text="Краторная булка N-200i (верх)"
          thumbnail="https://via.placeholder.com/80x40"
          type="bottom"
          price={200}
          isLocked={true}
          extraClass=""
          handleClose={() => console.log("Handler Ok!")}
        />
      </article>
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
