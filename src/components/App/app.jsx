import React from "react"
import { useState, useEffect } from "react";
import Modal from "../Modal/modal";
import AppHeader from "../AppHeader/app-header";
import BurgerIngredients from "../BurgerIngredients/burger-ingredients";
import BurgerConstructor from "../BurgerConstructor/burger-constructor";

import styles from "./app.module.css";

export default function App() {
  const URL = "https://norma.nomoreparties.space/api/ingredients";
  const [ingredientsList, setIngredeintsList] = useState(null);
  const [isModalOpened, setIsModalOpened] = useState(false);
  useEffect(() => {
    const getIngredientsList = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setIngredeintsList(data.data);
    };
    getIngredientsList();
  }, []);

  function handleOpenModal() {
    setIsModalOpened(true);
  }

  function handleCloseModal() {
    setIsModalOpened(false);
  }

  let modalContent = null;
  function handleModalContent(recievedModalContent) {
    modalContent = recievedModalContent;
    handleOpenModal();
  }

  if(!ingredientsList) {
    return null;
  } else {
    return (
      <>
        {
          isModalOpened && <Modal onCloseModal={handleCloseModal}>
            {modalContent}
          </Modal>
        }
        <AppHeader />
        <main className={styles.main}>
          <BurgerIngredients
            ingredientsList={ingredientsList}
            onOpenModal={handleModalContent}
          />
          <BurgerConstructor
            ingredientsList={ingredientsList}
            onOpenModal={handleModalContent}
          />
        </main>
      </>
    )
  }
}
