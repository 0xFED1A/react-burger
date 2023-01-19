import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SWAP_INGREDIENT_POSITION
} from "../actions/burger-constructor-action";

const initialValue = {
  bun: "60d3b41abdacab0026a733c6",
  mainsAndSauces: [
  ]
}

// this reducer generates list of ingredients in current burger constructor
export default function burgerConstructorReducer(state = initialValue, action) {
  switch (action.type) {
    case ADD_INGREDIENT: {
      // if passed object data is bun, we just swap it with new bun, not a big deal
      if (action.isBun) {
        return {...state, bun: action.id};
      } else {
        /* if component is not but we put it in provided position. If the drop
         * target is BurgerConstructorList, the provided action.position is
         * always 0, but if some other Ingredient is a drop target, the
         * provided action.position is current index of drop target Ingredient
         * in mainsAndSauces array
         */
        const newMainsAndSauces = [...state.mainsAndSauces];
        newMainsAndSauces.splice(action.position, 0, action.id);
        return ({ ...state, mainsAndSauces: newMainsAndSauces});
      }
    }
    case REMOVE_INGREDIENT: {
      // we cant remove bun
      if (action.isBun) {
        return {...state};
      } else {
        // we just splice array to remove one element
        const newMainsAndSauces = [...state.mainsAndSauces];
        newMainsAndSauces.splice(action.position, 1);
        return ({ ...state , mainsAndSauces: newMainsAndSauces});
      }
    }
    case SWAP_INGREDIENT_POSITION: {
      // we cant swap buns
      if (action.isBun) {
        return {...state};
      } else {
        /* for this action we need at least TWO positions. Because, we might
         * sort Ingredients in both directions (up and down), we need action.dropPosition
         * which is postion of Ingredient on which we drop new ingredient in mainsAndSauces
         * array, and action.dragPosition - which is possition of Ingredient
         * which we drops onto old Ingredient
         */
        const newMainsAndSauces = [...state.mainsAndSauces];
        const dropContentCopy = newMainsAndSauces[action.dropPosition];
        newMainsAndSauces[action.dropPosition] = newMainsAndSauces[action.dragPosition];
        newMainsAndSauces[action.dragPosition] = dropContentCopy;
        return ({
          ...state,
          mainsAndSauces: newMainsAndSauces
        });
      }
    }
    default: {
      return state;
    }
  }
}
