import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import {BrowserRouter} from "react-router-dom"
import './index.css';
import App from './App';
import store from "./Redux/store";
import {Provider} from "react-redux";

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
  <App />
  </Provider>
    
  </BrowserRouter>
</React.StrictMode>,
  document.getElementById('root')
);


