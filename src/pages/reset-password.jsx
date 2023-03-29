import React from "react";
import VerticalForm from "../components/VerticalForm/vertical-form";

import { RESET_PASS_DATA } from "../utils/constants";

export default function ResetPassword() {
  const {heading, inputs, buttonCaption, links} =
    RESET_PASS_DATA;

  return(
    <VerticalForm
      heading={heading}
      inputs={inputs}
      buttonCaption={buttonCaption}
      links={links}
    />
  )
}
