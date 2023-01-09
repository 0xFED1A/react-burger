// utils import
import { BURGER_API_URL } from "./constants";

// this function gets response from server
// if passes response to checkResponse() function,
// and result is ok, it simply returns data
export function getIngredientsList() {
  const fetchResult =
    fetch(`${BURGER_API_URL}/ingredients`)
    .then(response => checkResponse(response))
    .then(serverData => {
      if (serverData && serverData.success) {
        return serverData.data;
      } else {
        return new Error("Ошибка получения данных с сервера: !success")
      }
    })
    .catch(error => {
      const errMsg =`Ошибка получения данных сервера: ${error.message}`;
      console.log(errMsg);
      return new Error(errMsg);
    });
  return fetchResult;
}

// this fucntion checks response from server
// if arg's field "ok" is true, it returnse JSONified
// version of response, if not, it returns rejecterd promise
export function checkResponse(response) {
  return (
    response.ok ?
    response.json():
    response.json().then(error => Promise.reject(error))
  );
}

// this function recieves order details (such as name/number/status)
// from server
export function getOrderData(ingredientsIds) {
  const fetchResult =
    fetch(
      `${BURGER_API_URL}/orders`,
      {
        method: "POST",
        body: JSON.stringify(ingredientsIds)
      }
    )
    .then(response => checkResponse(response))
    .then(serverData => {
      if (serverData && serverData.success) {
        return serverData.data;
      } else {
        return new Error("Ошибка получения статсуа заказа с сервера: !success");
      }
    })
    .catch(error => {
      const errMsg =`Ошибка получения данных сервера: ${error.message}`;
      console.log(errMsg);
      return new Error(errMsg);
    });
  return fetchResult;
}
