import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TimeMsk from './Timeblock/index';
import reportWebVitals from './reportWebVitals';
import TimeMsk_native from './Timeblock/time_native';
import App from './app/app';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <TimeMsk />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
