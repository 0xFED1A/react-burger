// server URL without endpoint required for connection
export const BURGER_API_URL = "https://norma.nomoreparties.space/api";

//ingredient types
export const INGREDIENT_TYPE_BUN = "bun";
export const INGREDIENT_TYPE_SAUCE = "sauce";
export const INGREDIENT_TYPE_MAIN = "main";

export const INGREDIENT_TYPE_BUN_FLAT = "flat-bun";
export const INGREDIENT_TYPE_SAUCE_FLAT = "flat-sauce";
export const INGREDIENT_TYPE_MAIN_FLAT = "flat-main";

// export ingredient positions
export const POSITION_TYPE_TOP = "top";
export const POSITION_TYPE_BOTTOM = "bottom"

// export pages data
export const REGISTER_DATA = {
  heading: "Регистрация",
  inputs: [
    {
      name: "name",
      placeholder: "Имя",
      type: "text",
      icon: null
    },
    {
      name: "email",
      placeholder: "E-mail",
      type: "email",
      icon: null
    },
    {
      name: "password",
      placeholder: "Пароль",
      type: "password",
      icon: "ShowIcon"
    }
  ],
  buttonCaption: "Зарегестрироваться",
  links: [
    {
      caption: "Уже зарегистрированы?",
      linkName: "Войти",
      route: "/login"
    }
  ]
}
export const LOGIN_DATA = {
  heading: "Вход",
  inputs: [
    {
      name: "email",
      placeholder: "E-mail",
      type: "email",
      icon: null
    },
    {
      name: "password",
      placeholder: "Пароль",
      type: "password",
      icon: "ShowIcon"
    }
  ],
  buttonCaption: "Войти",
  links: [
    {
      caption: "Вы — новый пользователь?",
      linkName: "Зарегистрироваться",
      route: "/register"
    },
    {
      caption: "Забыли пароль?",
      linkName: "Восстановить пароль",
      route: "/forgot-password"
    },
  ]
}
export const FORGOT_PASS_DATA = {
  heading: "Восстановление пароля",
  inputs: [
    {
      name: "email",
      placeholder: "Укажите e-mail",
      type: "email",
      icon: null
    }
  ],
  buttonCaption: "Восстановить",
  links: [
    {
      caption: "Вспомнили пароль?",
      linkName: "Войти",
      route: "/login"
    }
  ]
}
