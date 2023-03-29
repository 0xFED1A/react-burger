import React from "react";
import VerticalForm from "../components/VerticalForm/vertical-form";

export default function Register() {
  const heading = "Регистрация";
  const inputs = [
    {
      name: "Имя",
      type: "text",
      icon: null
    },
    {
      name: "E-mail",
      type: "email",
      icon: null
    },
    {
      name: "Пароль",
      type: "password",
      icon: "ShowIcon"
    },
  ]
  const buttonCaption = "Зарегестрироваться";
  const links = [
    {
      caption: "Уже зарегистрированы?",
      linkName: "Войти",
      route: "/login"
    }
  ];
  return(
    <VerticalForm
      heading={heading}
      inputs={inputs}
      buttonCaption={buttonCaption}
      links={links}
    />
  );
}
