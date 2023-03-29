import React from "react";
import VerticalForm from "../components/VerticalForm/vertical-form";

import { RESET_PASS_DATA } from "../utils/constants";

export default function ResetPassword() {
  const {heading, inputs, buttonCaption, links} =
    RESET_PASS_DATA;

  function resetEmail(event) {
    const body = {
      password: event.target.password.value,
      token: event.target.code.value
    }
    fetch(
      'https://norma.nomoreparties.space/api/password-reset/reset',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
  }

  return(
    <VerticalForm
      heading={heading}
      inputs={inputs}
      buttonCaption={buttonCaption}
      links={links}
      callback={resetEmail}
    />
  )
}
