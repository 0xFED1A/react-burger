import React from "react";
import {
  Button,
  ConstructorElement,
  DragIcon,
  CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-constructor.module.css";

export default function BurgerConstructor() {
  return (
    <section
      className={`${styles["burger-constructor"]} mt-25`}
      aria-label="Конструктор бургеров"
    >
      <div>
        <ConstructorElement
          text="Краторная булка N-200i (верх)"
          thumbnail="https://via.placeholder.com/80x40"
          price={200}
          isLocked={false}
          type="top"
          extraClass=""
          handleClose={() => console.log("Handler Ok!")}
        />
        <ConstructorElement
          text="Краторная булка N-200i (верх)"
          thumbnail="https://via.placeholder.com/80x40"
          price={200}
          isLocked={false}
          extraClass=""
          handleClose={() => console.log("Handler Ok!")}
        />
        <ConstructorElement
          text="Краторная булка N-200i (верх)"
          thumbnail="https://via.placeholder.com/80x40"
          price={200}
          isLocked={false}
          extraClass=""
          handleClose={() => console.log("Handler Ok!")}
        />
        <ConstructorElement
          text="Краторная булка N-200i (верх)"
          thumbnail="https://via.placeholder.com/80x40"
          price={200}
          isLocked={false}
          extraClass=""
          handleClose={() => console.log("Handler Ok!")}
        />
        <ConstructorElement
          text="Краторная булка N-200i (верх)"
          thumbnail="https://via.placeholder.com/80x40"
          price={200}
          isLocked={false}
          extraClass=""
          handleClose={() => console.log("Handler Ok!")}
        />
        <ConstructorElement
          text="Краторная булка N-200i (верх)"
          thumbnail="https://via.placeholder.com/80x40"
          price={200}
          isLocked={false}
          extraClass=""
          handleClose={() => console.log("Handler Ok!")}
        />
        <ConstructorElement
          text="Краторная булка N-200i (верх)"
          thumbnail="https://via.placeholder.com/80x40"
          price={200}
          isLocked={false}
          type="bottom"
          extraClass=""
          handleClose={() => console.log("Handler Ok!")}
        />
      </div>
      <DragIcon type="primary" />
      <span>620</span>
      <CurrencyIcon type="primary" />
      <Button htmlType="button" type="primary" size="medium">
        Оформить заказ
      </Button>
    </section>
  )
}
