import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Styles from './style/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Styles>
    <App />
  </Styles>,
);
