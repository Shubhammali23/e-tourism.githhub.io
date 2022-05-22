import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; //import app.js here so that we can write <App/>

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// 1st parameter what to render
// 2nd paramter where to render