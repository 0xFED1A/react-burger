import { combineReducers } from "redux";
import burgerConstructorReducer from "./burger-constructor-reducer";
import burgerIngredientsReducer from "./burger-ingredients-reducer";
import ingredientDetailsReducer from "./ingredient-details-reducer";
import orderDetailsReducer from "./order-details-reducer";

const rootReducer = combineReducers({
  ingredients: burgerIngredientsReducer,
  usedIngredients: burgerConstructorReducer,
//ingredient: ingredientDetailsReducer,
//order: orderDetailsReducer,
})

export default rootReducer;
