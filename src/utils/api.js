// utils import
import { BURGER_API_URL } from "./constants";

// this function gets response from server
// if passes response to checkResponse() function,
// and result is ok, it simply calls callback with
// server response as arg
export async function getIngredientsList(onServerOkCallback) {
  const serverResponse = await fetch(`${BURGER_API_URL}/ingredients`)
    .then(response => checkResponse(response))
    .catch(err => console.log(`Ошибка соединения с сервером: ${err.message}`));
  if (serverResponse && serverResponse.success) {
    onServerOkCallback(serverResponse.data);
  }
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
