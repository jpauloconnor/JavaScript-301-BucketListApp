import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import FunApp from './components/app';
import reducers from './reducers';

var createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

    <FunApp />
   
  
  </Provider>
  , document.querySelector('.container'));
