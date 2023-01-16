import React from 'react';
import ReactDOM from 'react-dom/client';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/App/app';
import rootReducer from './services/reducers/root-reducer';

import './index.css';
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css?module"
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css?module";

const rootElement = document.querySelector("#root");
const rootComponent = ReactDOM.createRoot(rootElement as HTMLElement);

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

rootComponent.render(
  (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  )
);
