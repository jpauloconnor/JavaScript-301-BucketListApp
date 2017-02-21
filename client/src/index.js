import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/app';
import Signin from './components/auth/signin';
import ListItem from './components/list/new-list-item';
import reducers from './reducers';

var createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={browserHistory}>
  			<Route path="/" component={App}>
  			  	<Route path="signin" component={Signin} />
  			  	<Route path="newitem" component={ListItem} />
  			</Route>
  		</Router>
  </Provider>
  , document.querySelector('.container'));
