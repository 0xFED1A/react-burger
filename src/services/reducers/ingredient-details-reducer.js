import {
  SET_CURRENT_INGREDIENT,
  CLEAR_CURRENT_INGREDIENT
} from "../actions/ingredient-details-action";

const initialValue = {
  id: null
}

// this reducer contains data for current previewing ingredient
export default function ingredientDetailsReducer(state = initialValue, action) {
  switch (action.type) {
    case SET_CURRENT_INGREDIENT: {
      return {id: action.id};
    } case CLEAR_CURRENT_INGREDIENT: {
      return {id: null}
    } default: {
      return state;
    }
  }
}
