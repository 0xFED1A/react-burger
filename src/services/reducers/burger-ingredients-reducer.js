import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
} from "../actions/burger-ingredients-action";

const initialValue = {
  buns: [],
  mains: [],
  sauces: [],
  requesting: false,
  success: true,
  error: null
}

// this reducer generates list of available ingredients fetched from server
export default function burgerIngredientsReducer(state = initialValue, action) {
  switch(action.type) {
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
        buns: action.ingredients.filter(item => item.type === "bun"),
        mains: action.ingredients.filter(item => item.type === "main"),
        sauces: action.ingredients.filter(item => item.type === "sauce"),
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
