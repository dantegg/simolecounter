import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import App from './containers/App.js';
import configureStore from './store/configureStore.js';


const store = configureStore();

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
