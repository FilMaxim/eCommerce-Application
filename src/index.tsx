import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { Init } from './Init';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Init />
  </React.StrictMode>
);
