import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/app';

import './index.css';
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css?module"
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css?module";

const rootElement = document.querySelector("#root");
const rootComponent = ReactDOM.createRoot(rootElement as HTMLElement);

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

rootComponent.render(
  (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
);
