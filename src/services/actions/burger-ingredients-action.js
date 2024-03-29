import { getIngredientsList } from "../../utils/api";

export const GET_INGREDIENTS_REQUEST = "GET_ITEMS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_ITEMS_FAILED";

// this middleware performs API call to get ingredients data from server
export function getIngredientsFromServer() {
  return function(dispatch) {
    dispatch({type: GET_INGREDIENTS_REQUEST});
    getIngredientsList()
      .then(data => {
        dispatch({type: GET_INGREDIENTS_SUCCESS, ingredients: data});
      })
      .catch(error => {
        const errorMsg =`Ошибка получения данных сервера: ${error.message}`;
        dispatch({type: GET_INGREDIENTS_FAILED, errorMsg});
      });
    ;
  }
}
