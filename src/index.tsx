import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/app';

import './index.css';
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css?module"
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css?module";

const rootElement = document.querySelector("#root");
const rootComponent = ReactDOM.createRoot(rootElement as HTMLElement);

rootComponent.render(
  (
    <App />
  )
)
