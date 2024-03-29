import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import AppHeader from "../AppHeader/app-header";
import BurgerIngredients from "../BurgerIngredients/burger-ingredients";
import BurgerConstructor from "../BurgerConstructor/burger-constructor";
import {getIngredientsFromServer} from "../../services/actions/burger-ingredients-action";

import styles from "./app.module.css";

// App component
export default function App() {
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
      <>
        <AppHeader />
        <main className={styles.main}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </main>
      </>
  );
}
