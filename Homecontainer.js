import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './store/reducer'


import { CookiesProvider } from 'react-cookie';
let initialStore = { 
    cookies:'null'
};
const store = createStore(reducer, initialStore);
ReactDOM.render(
 <CookiesProvider>
  <BrowserRouter>
   <Provider store={store}>
    <App />
   </Provider>
  </BrowserRouter>
 </CookiesProvider>,
document.getElementById('root'));
