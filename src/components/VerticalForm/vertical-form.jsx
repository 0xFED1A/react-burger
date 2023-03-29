import React from "react";
import { Link } from "react-router-dom";

import {
  Input,
  Button
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./vertical-form.module.css"

export default function VerticalForm({heading, inputs, buttonCaption, links}) {
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
                type={inputData.type}
                placeholder={inputData.name}
                icon={inputData.icon}
                value=""
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
            links.map(linksData =>
              <div className={`mb-4 ${styles["links-pair"]}`}>
                <p className={`text text_type_main-default text_color_inactive`}>
                  {linksData.caption}
                </p>
                <Button
                  extraClass={`ml-2 ${styles.link}`}
                  htmlType="button"
                  type="secondary"
                  size="medium"
                  onClick={null}
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
