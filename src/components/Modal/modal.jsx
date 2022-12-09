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
          <div className={`${styles["modal__header"]}`}>
            <span>{props.heading}</span>
            <CloseIcon type="primary" />
          </div>
        </div>
      </ModalOverlay>
    ),
    modalEntrypointElement
  );
}
