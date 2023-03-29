import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import {
  Input,
  Button
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./vertical-form.module.css"

export default function VerticalForm({heading, inputs, buttonCaption, links}) {
  const initialInputValues =
    inputs.map(inputData => {return {name: inputData.name, value: ""}});
  const [inputValues, setInputValues] = useState(initialInputValues);

  function inputHandler(event) {
    const indexOfTriggeredInput =
      inputValues.map(obj => obj.name).indexOf(event.target.name);
    setInputValues(prevState => {
      let newState = [...prevState];
      newState[indexOfTriggeredInput].value = event.target.value;
      return newState;
    });
  }

  const navigate = useNavigate();

  return (
      <form
        className={styles["inputs-form"]}
        noValidate
      >
        <h2 className="text text_type_main-medium">{heading}</h2>
        <fieldset className={styles["inputs-group"]}>
          {
            inputs.map(inputData =>
              <Input
                extraClass="mt-6"
                name={inputData.name}
                key={inputData.name}
                type={inputData.type}
                value={inputValues.find(val => val.name === inputData.name).value}
                placeholder={inputData.placeholder}
                icon={inputData.icon}
                onChange={inputHandler}
                spellCheck={false}
              />
            )
          }
          <Button
            extraClass={`mt-6 ${styles.button}`}
            htmlType="submit"
            type="primary"
            size="medium"
          >
            {buttonCaption}
          </Button>
        </fieldset>
        <div className={`mt-20 ${styles["links-group"]}`}>
          {
            links.map((linksData, key) =>
              <div key={key} className={`mb-4 ${styles["links-pair"]}`}>
                <p className={`text text_type_main-default text_color_inactive`}>
                  {linksData.caption}
                </p>
                <Button
                  extraClass={`ml-2 ${styles.link}`}
                  htmlType="button"
                  type="secondary"
                  size="medium"
                  onClick={() => navigate(linksData.route)}
                >
                  {linksData.linkName}
                </Button>
              </div>
            )
          }
        </div>
      </form>
  )
}
