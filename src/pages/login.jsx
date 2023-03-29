import React from "react";
import VerticalForm from "../components/VerticalForm/vertical-form";

import { LOGIN_DATA } from "../utils/constants";

export default function Login() {
  const {heading, inputs, buttonCaption, links} =
    LOGIN_DATA;

  return(
    <VerticalForm
      heading={heading}
      inputs={inputs}
      buttonCaption={buttonCaption}
      links={links}
    />
  )
}
