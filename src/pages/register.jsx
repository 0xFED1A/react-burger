import React from "react";
import VerticalForm from "../components/VerticalForm/vertical-form";

import { REGISTER_DATA } from "../utils/constants";

export default function Register() {
  const {heading, inputs, buttonCaption, links} =
    REGISTER_DATA;

  function registerUser(event) {
    const body = {
      email: event.target.email.value,
      password: event.target.password.value,
      name: event.target.name.value
    }
    fetch(
      'https://norma.nomoreparties.space/api/auth/register',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    );
  }

  return(
    <VerticalForm
      heading={heading}
      inputs={inputs}
      buttonCaption={buttonCaption}
      links={links}
      callback={registerUser}
    />
  );
}
