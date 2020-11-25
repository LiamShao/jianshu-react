import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { GlobalStyle } from './style.js';
import { IconFont } from './statics/iconfont/iconfont'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <IconFont />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
