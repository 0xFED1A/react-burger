import React from "react";
import PropTypes from "prop-types";
import styles from "./order-details.module.css"

export default function OrderDetails({orderNumber}) {

  return (
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
  );
}

OrderDetails.propTypes = {
  orderNumber: PropTypes.number.isRequired
};
