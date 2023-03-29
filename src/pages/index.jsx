import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import BurgerIngredients from "../components/BurgerIngredients/burger-ingredients";
import BurgerConstructor from "../components/BurgerConstructor/burger-constructor";
import { getIngredientsFromServer } from "../services/actions/burger-ingredients-action";

export default function Index() {
  const dispatch = useDispatch();
  const {requesting, success, error} = useSelector(store => store.ingredients);

  useEffect(() => dispatch(getIngredientsFromServer()), [dispatch]);

  const apiCallFailed = !requesting && !success && error;
  const apiCallSuccessful = !requesting && success && !error;

  if (apiCallFailed) {
    console.log(error);
  }
  return (
    apiCallSuccessful &&
    <DndProvider backend={HTML5Backend}>
      <BurgerIngredients />
      <BurgerConstructor />
    </DndProvider>
  )
}
