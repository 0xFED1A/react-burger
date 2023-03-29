import React from "react";
import VerticalForm from "../components/VerticalForm/vertical-form";

import { FORGOT_PASS_DATA } from "../utils/constants";

export default function ForgotPassword() {
  const {heading, inputs, buttonCaption, links} =
    FORGOT_PASS_DATA;

  return(
    <VerticalForm
      heading={heading}
      inputs={inputs}
      buttonCaption={buttonCaption}
      links={links}
    />
  )
}
