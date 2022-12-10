import React from "react"
import { useState, useEffect } from "react";
import Modal from "../Modal/modal";
import AppHeader from "../AppHeader/app-header";
import BurgerIngredients from "../BurgerIngredients/burger-ingredients";
import BurgerConstructor from "../BurgerConstructor/burger-constructor";
import { BURGER_API_URL } from "../../utils/constants";

import styles from "./app.module.css";

export default function App() {
  const [ingredientsList, setIngredeintsList] = useState(null);
  const [modalData, setModalData] =
    useState({isOpened: false, content: null, header: null});
  useEffect(() => {
    const getIngredientsList = async () => {
      const response = await fetch(`${BURGER_API_URL}/ingredients`)
        .catch(() => Promise.reject(`Ошибка запроса данных с сервера: ${response.status}`));
      const serverData = await response.json()
        .catch(() => console.log("Ошибка запроса данных с сервера"));
      if (serverData && serverData.success) {
        setIngredeintsList(serverData.data);
      }
    };
    getIngredientsList();
  }, []);

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
