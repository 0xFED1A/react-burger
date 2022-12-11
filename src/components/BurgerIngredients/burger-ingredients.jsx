import React from "react";
import { useState, useMemo } from "react";
import Modal from "../Modal/modal"
import IngredientDetails from "../IngredientDetails/ingerdient-details";
import IngredientsCategory from "../IngredientsCategory/ingredients-category";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import { ingredientObjectProp } from "../../utils/propTypes";
import styles from "./burger-ingredients.module.css";

export default function BurgerIngredients({ingredientsList}) {
  // this states is required to control rendering
  // of Modal component
  const [modalData, setModalData] =
    useState({isOpened: false, content: null, header: null});

  // this states is required to control rendering
  // of Tab component
  const [currentTab, setTab] = useState("bun");
  function tabSwitchHandler(value) {
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
          <section className="mt-10">
            <h3 className="text text_type_main-medium">Булки</h3>
            <ul className={`${styles.list} mt-6 pl-4 pr-4`}>
              {
                buns.map(item => (
                  <li
                    key={item["_id"]}
                    id={item["_id"]}
                    onClick={handleOpenModal}
                  >
                    <article className={styles["list-item"]}>
                      <img
                        className="pl-4 pr-4 pb-2"
                        src={item.image}
                        alt={item.name}
                      />
                      <Counter count={1} size={"default"} extraClass="" />
                      <div className={`${styles["list-item__price-box"]} mb-2`}>
                        <span className="text text_type_digits-default">
                          {item.price}
                        </span>
                        <CurrencyIcon type="primary" />
                      </div>
                      <h5 className={`${styles["list-item__item-name"]} text text_type_main-default`}>
                        {item.name}
                      </h5>
                    </article>
                  </li>
                ))
              }
            </ul>
          </section>
          <section className="mt-10">
            <h3 className="text text_type_main-medium">Соусы</h3>
            <ul className={`${styles.list} mt-6 pl-4 pr-4`}>
              {
                sauces.map(item => (
                  <li
                    key={item["_id"]}
                    id={item["_id"]}
                    onClick={handleOpenModal}
                  >
                    <article className={styles["list-item"]}>
                      <img
                        className="pl-4 pr-4 pb-2"
                        src={item.image}
                        alt={item.name}
                      />
                      <Counter count={1} size={"default"} extraClass="" />
                      <div className={`${styles["list-item__price-box"]} mb-2`}>
                        <span className="text text_type_digits-default">
                          {item.price}
                        </span>
                        <CurrencyIcon type="primary" />
                      </div>
                      <h5 className={`${styles["list-item__item-name"]} text text_type_main-default`}>
                        {item.name}
                      </h5>
                    </article>
                  </li>
                ))
              }
            </ul>
          </section>
          <section className="mt-10">
            <h3 className="text text_type_main-medium">Основное</h3>
            <ul className={`${styles.list} mt-6 pl-4 pr-4`}>
              {
                mains.map(item => (
                  <li
                    key={item["_id"]}
                    id={item["_id"]}
                    onClick={handleOpenModal}
                  >
                    <article className={styles["list-item"]}>
                      <img
                        className="pl-4 pr-4 pb-2"
                        src={item.image}
                        alt={item.name}
                      />
                      <Counter count={1} size={"default"} extraClass="" />
                      <div className={`${styles["list-item__price-box"]} mb-2`}>
                        <span className="text text_type_digits-default">
                          {item.price}
                        </span>
                        <CurrencyIcon type="primary" />
                      </div>
                      <h5 className={`${styles["list-item__item-name"]} text text_type_main-default`}>
                        {item.name}
                      </h5>
                    </article>
                  </li>
                ))
              }
            </ul>
          </section>
        </div>
      </section>
    </>
  )
}

BurgerIngredients.propTypes = {
  ingredientsList: PropTypes.arrayOf(ingredientObjectProp.isRequired).isRequired,
};
