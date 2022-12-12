import React from "react";
import { useEffect } from "react";
import PropTypes from 'prop-types';

import styles from "./modal-overlay.module.css"

export default function ModalOverlay({children, onOverlayClick}) {

  useEffect(() => {
    const overlayDiv = document.querySelector(`.${styles["modal-overlay"]}`);

    return () => {
      overlayDiv.removeEventListener("mousedown", onOverlayClick);
    }
  });

  return (
    <div
      className={styles["modal-overlay"]}
      id="overlay"
      onMouseDown={onOverlayClick}
    >
      {children}
    </div>
  )
}

ModalOverlay.propTypes = {
  children: PropTypes.element.isRequired,
  onOverlayClick: PropTypes.func.isRequired
};
