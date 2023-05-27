import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Exercicio1 from './Exercicio1';
import Exercicio2 from './Exercicio2';
import reportWebVitals from './reportWebVitals';
import Exercicio3 from './Exercicio3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <Exercicio1 />
    <hr/>
    <Exercicio2 />
    <hr/>
    <Exercicio3 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
