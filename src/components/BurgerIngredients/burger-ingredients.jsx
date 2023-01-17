import React from "react";
import { useState, useMemo } from "react";
import { useSelector } from "react-redux";

import Modal from "../Modal/modal"
import IngredientDetails from "../IngredientDetails/ingerdient-details";
import IngredientsCategory from "../IngredientsCategory/ingredients-category";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-ingredients.module.css";

export default function BurgerIngredients() {
  // this states is required to control rendering
  // of Modal component
//const [modalData, setModalData] =
//  useState({isOpened: false, content: null, header: null});

  // this functions scrolls box with ingredients
  // based on passed tab value
  function scrollToIngredientSection(value) {
    const scrollBox =
      document.querySelector(`.${styles["list-wrapper"]}`);

    const sectionElement = document.getElementById(`${value}s-list`);
    const sectionElementOffset = sectionElement.offsetTop;
    const sectionElementMarginTop = parseInt(
      window.getComputedStyle(sectionElement)
      .getPropertyValue("margin-top")
    );

    scrollBox.scrollTop =
      sectionElementOffset - (sectionElementMarginTop + scrollBox.offsetTop);
  }

  // this states is required to control rendering
  // of Tab component
  const [currentTab, setTab] = useState("bun");
  function tabSwitchHandler(value) {
    scrollToIngredientSection(value);
    setTab(value);
  }

  // this handler is triggered on order button click which
  // leads to opening modal window
//function handleOpenModal(id) {
//  const componentToPass = ingredientsList
//    .find(item => item._id === id);
//  const ingredientModalData = {
//    isOpened: true,
//    content: (<IngredientDetails ingredient={componentToPass} />),
//    header: "Детали ингредиента"
//  }
//  setModalData(ingredientModalData) ;
//}

  // this handler is trigered on any action which
  // leads to closing modal window
//function handleCloseModal() {
//  setModalData({isOpened: false, content: null, header: null})
//}

  const {buns, mains, sauces} = useSelector(store => store.ingredients);
  const {bun, mainsAndSauces} = useSelector(store => store.usedIngredients);

  const bunsList = useMemo(
    () => {
      const usedBun = bun;
      return buns.reduce((acc, oneOfAvailableBuns) => {
        acc.push({
          data: oneOfAvailableBuns,
          quantity: oneOfAvailableBuns._id === usedBun ? 1 : 0
        });
        return acc;
      }, []);
    }, [buns, bun]);

  const mainsList = useMemo(
    () => {
      return mains.reduce((acc, oneOfAvailableMains) => {
        acc.push({
          data: oneOfAvailableMains,
          quantity:
            mainsAndSauces.filter(oneOfUsedMains => (
              oneOfUsedMains === oneOfAvailableMains._id)
            ).length
        });
        return acc;
      }, []);
    }, [mains, mainsAndSauces]);

  const saucesList = useMemo(
    () => {
      return sauces.reduce((acc, oneOfAvailableSauces) => {
        acc.push({
          data: oneOfAvailableSauces,
          quantity:
            mainsAndSauces.filter(oneOfUsedSauces => (
              oneOfUsedSauces === oneOfAvailableSauces._id)
            ).length
        });
        return acc;
      }, []);
    }, [sauces, mainsAndSauces]);

  return (
    <>
      {/*
        modalData.isOpened &&
          <Modal header={modalData.header} onCloseModal={handleCloseModal}>
            {modalData.content}
          </Modal>
          */}
      <section className={`${styles["burger-ingredients"]} mt-10`}>
        <h1 className={`text text_type_main-large`}>
          Соберите бургер
        </h1>
        <div className={`${styles["tab-box"]} mt-5`}>
          <Tab
            value="bun"
            active={currentTab === "bun"}
            onClick={tabSwitchHandler}
          >
            Булки
          </Tab>
          <Tab
            value="sauce"
            active={currentTab === "sauce"}
            onClick={tabSwitchHandler}
          >
            Соусы
          </Tab>
          <Tab
            value="main"
            active={currentTab === "main"}
            onClick={tabSwitchHandler}
          >
            Начинки
          </Tab>
        </div>
        {
        <div className={styles["list-wrapper"]}>
          <IngredientsCategory
            categoryName="Булки"
            sameCategoryIngredients={bunsList}
            onButtonClick={/*handleOpenModal*/ null}
          />
          <IngredientsCategory
            categoryName="Соусы"
            sameCategoryIngredients={saucesList}
            onButtonClick={/*handleOpenModal*/ null}
          />
          <IngredientsCategory
            categoryName="Начинки"
            sameCategoryIngredients={mainsList}
            onButtonClick={/*handleOpenModal*/ null}
          />
        </div>
        }
      </section>
    </>
  )
}
