import React from "react";
import PortalReactDOM from 'react-dom';

export default function Modal() {
  const modalEntrypointElement = document.getElementById("modal");
  return PortalReactDOM.createPortal(
    (
      null
    ),
    modalEntrypointElement
  );
}
