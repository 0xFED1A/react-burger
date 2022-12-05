import React from 'react';
import App from './components/App/app';
import ReactDOM from 'react-dom/client';
import './index.css';

const rootElement = document.querySelector("#root");
const rootComponent = ReactDOM.createRoot(rootElement as HTMLElement);

rootComponent.render(
  (
    <App />
  )
)
