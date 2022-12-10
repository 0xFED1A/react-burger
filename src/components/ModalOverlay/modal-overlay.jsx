import React from "react";
import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';

import styles from "./modal-overlay.module.css"

export default function ModalOverlay({children, onOverlayClick}) {
  const overlayDivRef = useRef(null);

  useEffect(() => {
    const overlayDiv = overlayDivRef.current;
    overlayDiv.addEventListener("mousedown", onOverlayClick);

    return () => {
      overlayDiv.removeEventListener("mousedown", onOverlayClick);
    }
  });

  return (
    <div className={styles["modal-overlay"]} ref={overlayDivRef} id="overlay">
      {children}
    </div>
  )
}

ModalOverlay.propTypes = {
  children: PropTypes.element,
  onOverlayClick: PropTypes.func.isRequired
};
