import React from "react";

import styles from "./modal-overlay.module.css"

export default function ModalOverlay(props) {
  return (
    <div className={styles["modal-overlay"]}>
      {props.children}
    </div>
  )
}
