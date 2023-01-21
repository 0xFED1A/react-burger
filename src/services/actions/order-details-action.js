import { getOrderData } from "../../utils/api";

export const SEND_ORDER_DATA_REQUEST = "SEND_ORDER_DATA_REQUEST";
export const SEND_ORDER_DATA_SUCCESS = "SEND_ORDER_DATA_SUCCESS";
export const SEND_ORDER_DATA_FAILED = "SEND_ORDER_DATA_FAILED";

// this middleware performs API call to send order data to server
export function sendIngredientToServer(ingredientsIds) {
  return function(dispatch) {
    dispatch({type: SEND_ORDER_DATA_REQUEST});
    getOrderData(ingredientsIds)
      .then(data => {
        dispatch({type: SEND_ORDER_DATA_SUCCESS, orderDetails: data});
      })
      .catch(error => {
        const errorMsg =`Ошибка получения данных сервера: ${error.message}`;
        dispatch({type: SEND_ORDER_DATA_FAILED, errorMsg});
      });
    ;
  }
}
