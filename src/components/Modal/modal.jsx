import React from "react";
import PortalReactDOM from 'react-dom';
import {
  CloseIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../ModalOverlay/modal-overlay";

import styles from "./modal.module.css";

export default function Modal(props) {
  const modalEntrypointElement = document.getElementById("modal");
  return PortalReactDOM.createPortal(
    (
      <ModalOverlay>
        <div className={`${styles.modal}`}>
          <div className={`${styles["modal__header"]} mt-10 mr-10 ml-10`}>
            <span className="text text_type_main-large">{props.heading}</span>
            <button className={`${styles["modal__button-close"]}`} type="button">
              <CloseIcon type="primary" />
            </button>
          </div>
        </div>
      </ModalOverlay>
    ),
    modalEntrypointElement
  );
}
