import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
} from "../actions/burger-ingredients-action";
import {
  INGREDIENT_TYPE_BUN,
  INGREDIENT_TYPE_SAUCE,
  INGREDIENT_TYPE_MAIN
} from "../../utils/constants";


const initialValue = {
  buns: [],
  mains: [],
  sauces: [],
  requesting: false,
  success: false,
  error: null
}

// this reducer generates list of available ingredients fetched from server
export default function burgerIngredientsReducer(state = initialValue, action) {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {...state, requesting: true, success: false, error: null};
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        requesting: false,
        success: false,
        error: action.errorMsg
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        buns: action.ingredients.filter(item => item.type === INGREDIENT_TYPE_BUN),
        mains: action.ingredients.filter(item => item.type === INGREDIENT_TYPE_MAIN),
        sauces: action.ingredients.filter(item => item.type === INGREDIENT_TYPE_SAUCE),
        requesting: false,
        success: true,
        error: null
      }
    }
    default: {
      return state;
    }
  }
}
