import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import allReducers from "./reducers";
import { CookiesProvider } from 'react-cookie'

import thunk from 'redux-thunk';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const enhancers = [ applyMiddleware(thunk), devTools];





const store= createStore(
  allReducers, 
  compose(...enhancers)
  );




ReactDOM.render(

    <Provider store= { store }> 
      <CookiesProvider>
        <App />
      </CookiesProvider>
     
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
