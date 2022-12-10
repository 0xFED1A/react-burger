import React from "react";
import { useEffect, useRef } from "react";
import PortalReactDOM from 'react-dom';
import {
  CloseIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../ModalOverlay/modal-overlay";
import PropTypes from 'prop-types';

import styles from "./modal.module.css";

export default function Modal({children, header, onCloseModal}) {
  function handleCloseOnEscape(event) {
    if (event.key.toLowerCase() === "escape") {
      onCloseModal()
    };
  }

  function handleCloseOnOverlayClick(event) {
    if(event.target.id === "overlay") {
      onCloseModal()
    }
  };

  function handleCloseOnButtonClick() {
    onCloseModal()
  }

  const closeButtonRef = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", handleCloseOnEscape);
    const closeButton = closeButtonRef.current;
    closeButton.addEventListener("click", handleCloseOnButtonClick);


    return () => {
      closeButton.removeEventListener("click", handleCloseOnButtonClick);
      document.removeEventListener("keydown", handleCloseOnEscape);
    }
  });

  const modalEntrypointElement = document.getElementById("modal");
  return PortalReactDOM.createPortal(
    (
      <ModalOverlay onOverlayClick={handleCloseOnOverlayClick}>
        <div className={`${styles.modal}`}>
          <div className={`${styles["modal__header"]} mt-10 mr-10 ml-10`}>
            <span className="text text_type_main-large">{header}</span>
            <button
              className={`${styles["modal__button-close"]}`}
              type="button"
              ref={closeButtonRef}
            >
              <CloseIcon type="primary" />
            </button>
          </div>
          {children}
        </div>
      </ModalOverlay>
    ),
    modalEntrypointElement
  );
}

Modal.propTypes = {
  children: PropTypes.element,
  header: PropTypes.string,
  onCloseModal: PropTypes.func.isRequired
};
