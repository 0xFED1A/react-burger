// React import
import React from "react"
import { useState, useEffect } from "react";
// custom components import
import Modal from "../Modal/modal";
import AppHeader from "../AppHeader/app-header";
import BurgerIngredients from "../BurgerIngredients/burger-ingredients";
import BurgerConstructor from "../BurgerConstructor/burger-constructor";
// utils import
import { BURGER_API_URL } from "../../utils/constants";
import { getIngredientsList } from "../../utils/api";
// styles import
import styles from "./app.module.css";

// App component
export default function App() {
  const [ingredientsList, setIngredeintsList] = useState(null);
  const [modalData, setModalData] =
    useState({isOpened: false, content: null, header: null});

  useEffect(() => {getIngredientsList(setIngredeintsList)}, []);

  function handleOpenModal(recievedData) {
    setModalData(recievedData);
  }

  function handleCloseModal() {
    setModalData({isOpened: false, content: null, header: null})
  }

  if(!ingredientsList) {
    return null;
  } else {
    return (
      <>
        {
          modalData.isOpened &&
          <Modal header={modalData.header} onCloseModal={handleCloseModal}>
            {modalData.content}
          </Modal>
        }
        <AppHeader />
        <main className={styles.main}>
          <BurgerIngredients
            ingredientsList={ingredientsList}
            onOpenModal={handleOpenModal}
          />
          <BurgerConstructor
            ingredientsList={ingredientsList}
            onOpenModal={handleOpenModal}
          />
        </main>
      </>
    )
  }
}
