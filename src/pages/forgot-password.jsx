import React from "react";
import VerticalForm from "../components/VerticalForm/vertical-form";
import { useNavigate } from "react-router-dom";

import { FORGOT_PASS_DATA } from "../utils/constants";

export default function ForgotPassword() {
  const {heading, inputs, buttonCaption, links} =
    FORGOT_PASS_DATA;

  const navigate = useNavigate();

  function checkEmail(event) {
    const body = {
      email: event.target.email.value
    };
    fetch(
      'https://norma.nomoreparties.space/api/password-reset',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    ).then(res => res.json()).then(data => data.success ? navigate('/reset-password') : null);
  }

  return(
    <VerticalForm
      heading={heading}
      inputs={inputs}
      buttonCaption={buttonCaption}
      links={links}
      callback={checkEmail}
    />
  )
}
