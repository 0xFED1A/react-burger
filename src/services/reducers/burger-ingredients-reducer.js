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
  success: false
}

// this reducer generates list of available ingredients fetched from server
export default function burgerIngredientsReducer(state = initialValue, action) {
  switch(action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {...state, requesting: true, success: false};
    }
    case GET_INGREDIENTS_FAILED: {
      //TODO: move console.log() out of reducer!
      console.log(action.errorMsg);
      return {...state, requesting: false, success: false};
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        buns: action.ingredients.filter(item => item.type === "bun"),
        mains: action.ingredients.filter(item => item.type === "main"),
        sauces: action.ingredients.filter(item => item.type === "sauce"),
        requesting: false,
        success: true
      }
    }
    default: {
      return state;
    }
  }
}
