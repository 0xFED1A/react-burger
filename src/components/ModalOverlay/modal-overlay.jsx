import React from "react";
import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';

import styles from "./modal-overlay.module.css"

export default function ModalOverlay(props) {
  const overlayDivRef = useRef(null);

  useEffect(() => {
    const overlayDiv = overlayDivRef.current;
    overlayDiv.addEventListener("mousedown", props.onOverlayClick);

    return () => {
      overlayDiv.removeEventListener("mousedown", props.onOverlayClick);
    }
  });

  return (
    <div className={styles["modal-overlay"]} ref={overlayDivRef} id="overlay">
      {props.children}
    </div>
  )
}

ModalOverlay.propTypes = {
  children: PropTypes.element,
  onOverlayClick: PropTypes.func.isRequired
};
