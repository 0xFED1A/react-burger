import React, {useEffect, useState} from "react";

import styles from "./order-details.module.css"
import { getOrderData } from "../../utils/api";
import IngredientsContext from "../../services/ingredients-context";

export default function OrderDetails({currentBun, currentIngredients}) {
  const [orderNumber, setOrderNumber] = useState(null);

  useEffect(() => {
    const ingredientsIds =
      [currentBun, ...currentIngredients, currentBun].map(ingredient => ingredient["_id"]);
    getOrderData(ingredientsIds).then(data => setOrderNumber(data.order.number));
  }, [currentBun, currentIngredients]);


  return (
    <>
      { orderNumber &&
      <div className={`${styles["order-details"]} mt-4`}>
        <p className={`${styles["order-details__id"]} text text_type_digits-large`}>
          {orderNumber}
        </p>
        <p className="text text_type_main-medium mt-8">
          идентификатор заказа
        </p>
        <div className={`${styles["order-details__image"]} mt-15`}></div>
        <p className="text text_type_main-default mt-15">
          Ваш заказ начали готовить
        </p>
        <p className="text text_type_main-default mt-2 text_color_inactive mb-30">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
      }
    </>
  )
}
