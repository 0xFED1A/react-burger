import React from "react";
import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import Modal from "../Modal/modal"
import IngredientDetails from "../IngredientDetails/ingerdient-details";
import IngredientsCategory from "../IngredientsCategory/ingredients-category";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  CLEAR_CURRENT_INGREDIENT,
  SET_CURRENT_INGREDIENT
} from "../../services/actions/ingredient-details-action";
import {
  INGREDIENT_TYPE_BUN,
  INGREDIENT_TYPE_MAIN,
  INGREDIENT_TYPE_SAUCE
} from "../../utils/constants";

import styles from "./burger-ingredients.module.css";

export default function BurgerIngredients() {
  // get available components and currently used component from store
  const {buns, mains, sauces} = useSelector(store => store.ingredients);
  const {bun, mainsAndSauces} = useSelector(store => store.usedIngredients);

  /*
   * generate lists of used components. Each list consist of Object
   * like {id: string,  quantity: num}.
   * id property is used as props in Ingredient component, while quantity is
   * a prop for Counter component which resides inside Ingredient component
   */

  // available buns
  const bunsList = useMemo(
    () => {
      const usedBun = bun;
      return buns.reduce((acc, oneOfAvailableBuns) => {
        acc.push({
          id: oneOfAvailableBuns._id,
          quantity: oneOfAvailableBuns._id === usedBun ? 2 : 0
        });
        return acc;
      }, []);
    }, [buns, bun]);

  // available mains with counter for each entry
  const mainsList = useMemo(
    () => {
      return mains.reduce((acc, oneOfAvailableMains) => {
        acc.push({
          id: oneOfAvailableMains._id,
          quantity:
            mainsAndSauces.filter(oneOfUsedMains => (
              oneOfUsedMains === oneOfAvailableMains._id)
            ).length
        });
        return acc;
      }, []);
    }, [mains, mainsAndSauces]);

  // available sauces with counter for each entry
  const saucesList = useMemo(
    () => {
      return sauces.reduce((acc, oneOfAvailableSauces) => {
        acc.push({
          id: oneOfAvailableSauces._id,
          quantity:
            mainsAndSauces.filter(oneOfUsedSauces => (
              oneOfUsedSauces === oneOfAvailableSauces._id)
            ).length
        });
        return acc;
      }, []);
    }, [sauces, mainsAndSauces]);

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
  const [currentTab, setTab] = useState(INGREDIENT_TYPE_BUN);
  function tabSwitchHandler(value) {
    scrollToIngredientSection(value);
  }

  // ok, im not sure if i correctly understand this task, but
  // i think, that i need to swtich tabs selection when section headings
  // top left corner is positioned at the same spot with tabs selectors
  // bottom left corner. If so, it is kinda works
  function handleScroll(event) {
    const sectionNames = [
      INGREDIENT_TYPE_BUN,
      INGREDIENT_TYPE_SAUCE,
      INGREDIENT_TYPE_MAIN
    ];
    const sections = Array.from(event.target.children);
    const sectionMarginTop = parseInt(
      window.getComputedStyle(sections[0])
      .getPropertyValue("margin-top")
    );

    const tabBox = document.querySelector(`.${styles["tab-box"]}`);
    const tabBoxHeight = parseInt(window.getComputedStyle(tabBox).getPropertyValue("height"));
    const tabBoxPosition
      = tabBox.getBoundingClientRect().y + window.scrollY + tabBoxHeight + sectionMarginTop;

    const nearestSection = Array.from(event.target.children)
      .map(child => (child.getBoundingClientRect().y + window.scrollY) - tabBoxPosition | 0)
      .findLastIndex(item => item === 0 || item < 0);
    setTab(sectionNames[nearestSection]);
  }

  // get current previewing ingredient id from state
  const currentPreviewingIngredientId =
    useSelector(store => store.ingredient.id);
  const dispatch = useDispatch();

  // trigger updating of current previewing ingredient on click
  function handleOpenModal(previewingIngredientId) {
    dispatch({type: SET_CURRENT_INGREDIENT, id: previewingIngredientId});
  }

  // trigger reset of current previewing ingredient on modal close
  function handleCloseModal() {
    dispatch({type: CLEAR_CURRENT_INGREDIENT});
  }

  return (
    <>
      {
        currentPreviewingIngredientId &&
          <Modal header="Детали ингредиента" onCloseModal={handleCloseModal}>
            <IngredientDetails />
          </Modal>
      }
      <section className={`${styles["burger-ingredients"]} mt-10`}>
        <h1 className={`text text_type_main-large`}>
          Соберите бургер
        </h1>
        <div className={`${styles["tab-box"]} mt-5`}>
          <Tab
            value={INGREDIENT_TYPE_BUN}
            active={currentTab === INGREDIENT_TYPE_BUN}
            onClick={tabSwitchHandler}
          >
            Булки
          </Tab>
          <Tab
            value={INGREDIENT_TYPE_SAUCE}
            active={currentTab === INGREDIENT_TYPE_SAUCE}
            onClick={tabSwitchHandler}
          >
            Соусы
          </Tab>
          <Tab
            value={INGREDIENT_TYPE_MAIN}
            active={currentTab === INGREDIENT_TYPE_MAIN}
            onClick={tabSwitchHandler}
          >
            Начинки
          </Tab>
        </div>
        {
          <div className={styles["list-wrapper"]} onScroll={handleScroll}>
              {/*
                categoryType prop is used inside IngredientsCategory for
                html id generation purpose. It is required to performs
                tab switching function
              */}
            <IngredientsCategory
              categoryName="Булки"
              categoryType={`${INGREDIENT_TYPE_BUN}s`}
              sameCategoryIngredients={bunsList}
              onButtonClick={handleOpenModal}
            />
            <IngredientsCategory
              categoryName="Соусы"
              categoryType={`${INGREDIENT_TYPE_SAUCE}s`}
              sameCategoryIngredients={saucesList}
              onButtonClick={handleOpenModal}
            />
            <IngredientsCategory
              categoryName="Начинки"
              categoryType={`${INGREDIENT_TYPE_MAIN}s`}
              sameCategoryIngredients={mainsList}
              onButtonClick={handleOpenModal}
            />
          </div>
        }
      </section>
    </>
  )
}
