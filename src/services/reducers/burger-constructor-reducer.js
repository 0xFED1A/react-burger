import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SWAP_INGREDIENT_POSITION
} from "../actions/burger-constructor-action";

const initialValue = {
  bun: "60d3b41abdacab0026a733c6",
  mainsAndSauces: [
    "60d3b41abdacab0026a733c9",
    "60d3b41abdacab0026a733c9",
    "60d3b41abdacab0026a733c9",
    "60d3b41abdacab0026a733c9",
    "60d3b41abdacab0026a733ca",
    "60d3b41abdacab0026a733ca",
    "60d3b41abdacab0026a733cf",
    "60d3b41abdacab0026a733cf",
    "60d3b41abdacab0026a733cf",
    "60d3b41abdacab0026a733cf",
    "60d3b41abdacab0026a733cd"
  ]
}

// this reducer generates list of ingredients in current burger constructor
export default function burgerConstructorReducer(state = initialValue, action) {
  switch (action.type) {
    case ADD_INGREDIENT: {
      if (action.isBun) {
        return {...state, bun: action.id};
      } else {
        const newMainsAndSauces = [...state.mainsAndSauces];
        newMainsAndSauces.slice(action.position, 0, action.id);
        return ({ ...state, mainsAndSauces: newMainsAndSauces});
      }
    }
    case REMOVE_INGREDIENT: {
      if (action.isBun) {
        return {...state};
      } else {
        const newMainsAndSauces = [...state.mainsAndSauces];
        newMainsAndSauces.slice(action.position, 1);
        return ({ ...state , mainsAndSauces: newMainsAndSauces});
      }
    }
    case SWAP_INGREDIENT_POSITION: {
      if (action.isBun) {
        return {...state};
      } else {
        const newMainsAndSauces = [...state.mainsAndSauces];
        newMainsAndSauces.slice(action.oldPosition, 1);
        newMainsAndSauces.slice(
          action.newPosition, 0, state.mainsAndSauces[action.oldPosition]
        );
        return ({
          ...state,
          mainsAndSauces:
            [...state.mainsAndSauces]
        });
      }
    }
    default: {
      return state;
    }
  }
}
