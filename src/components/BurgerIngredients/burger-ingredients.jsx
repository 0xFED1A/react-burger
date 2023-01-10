import React from "react";
import { useState, useMemo, useContext } from "react";
import Modal from "../Modal/modal"
import IngredientDetails from "../IngredientDetails/ingerdient-details";
import IngredientsCategory from "../IngredientsCategory/ingredients-category";
import IngredientsContext from "../../services/ingredients-context";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";

export default function BurgerIngredients() {
  // this states is required to control rendering
  // of Modal component
  const [modalData, setModalData] =
    useState({isOpened: false, content: null, header: null});

  // get ingredients from context
  const {ingredientsList} = useContext(IngredientsContext);

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
  function handleOpenModal(id) {
    const componentToPass = ingredientsList
      .find(item => item._id === id);
    const ingredientModalData = {
      isOpened: true,
      content: (<IngredientDetails ingredient={componentToPass} />),
      header: "Детали ингредиента"
    }
    setModalData(ingredientModalData) ;
  }

  // this handler is trigered on any action which
  // leads to closing modal window
  function handleCloseModal() {
    setModalData({isOpened: false, content: null, header: null})
  }

  const buns = useMemo(
    () => ingredientsList.filter((item) => item.type === 'bun'),
    [ingredientsList]
  );
  const mains = useMemo(
    () => ingredientsList.filter((item) => item.type === 'main'),
    [ingredientsList]
  );
  const sauces = useMemo(
    () => ingredientsList.filter((item) => item.type === 'sauce'),
    [ingredientsList]
  );

  return (
    <>
      {
        modalData.isOpened &&
          <Modal header={modalData.header} onCloseModal={handleCloseModal}>
            {modalData.content}
          </Modal>
      }
      <section className={`${styles["burger-ingredients"]} mt-10`}>
        <h1 className={`text text_type_main-large`}>
          Соберите бургер
        </h1>
        <div className={`${styles["tab-box"]} mt-5`}>
          <Tab value="bun" active={currentTab === "bun"} onClick={tabSwitchHandler}>
            Булки
          </Tab>
          <Tab value="sauce" active={currentTab === "sauce"} onClick={tabSwitchHandler}>
            Соусы
          </Tab>
          <Tab value="main" active={currentTab === "main"} onClick={tabSwitchHandler}>
            Начинки
          </Tab>
        </div>
        <div className={styles["list-wrapper"]}>
          <IngredientsCategory
            categoryName="Булки"
            sameCategoryIngredients={buns}
            onButtonClick={handleOpenModal}
          />
          <IngredientsCategory
            categoryName="Соусы"
            sameCategoryIngredients={sauces}
            onButtonClick={handleOpenModal}
          />
          <IngredientsCategory
            categoryName="Начинки"
            sameCategoryIngredients={mains}
            onButtonClick={handleOpenModal}
          />
        </div>
      </section>
    </>
  )
}
