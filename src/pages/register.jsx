import React from "react";
import VerticalForm from "../components/VerticalForm/vertical-form";

import { REGISTER_DATA } from "../utils/constants";

export default function Register() {
  const {heading, inputs, buttonCaption, links} =
    REGISTER_DATA;

  return(
    <VerticalForm
      heading={heading}
      inputs={inputs}
      buttonCaption={buttonCaption}
      links={links}
    />
  );
}
