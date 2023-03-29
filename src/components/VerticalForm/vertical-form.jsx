import React from "react";
import { Link } from "react-router-dom";

import {
  ShowIcon,
  HideIcon,
  EditIcon
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
              <input
                className=""
                type={inputData.type}
                placeholder={inputData.name}
                value=""
                spellCheck={false}
              />
            )
          }
          <button
            className=""
            type="submit"
          >
            {buttonCaption}
          </button>
          {
            links.map(linksData =>
              <div className="">
                <p className="">{linksData.caption}</p>
                <Link to={linksData.route}>{linksData.linkName}</Link>
              </div>
            )
          }
        </fieldset>
      </form>
  )
}
