import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Feature from './components/feature';
import RequireAuth from './components/auth/require_auth'
import reducers from './reducers';
import PostsApp from './components/posts/posts-index';
import PostsNew from './components/posts/posts-new';
import PostsShow from './components/posts/posts-show';

var createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={browserHistory}>
  			<Route path="/" component={App}>
  			  <Route path="signin" component={Signin} />
 				  <Route path="signout" component={Signout} />
  				<Route path="signup" component={Signup} />
  				<Route path="feature" component={RequireAuth(Feature)} />
          <Route path="posts" component={RequireAuth(PostsApp)} />
          <Route path="posts/new" component={RequireAuth(PostsNew)} />
          <Route path="posts/:id" component={RequireAuth(PostsShow)} />
  			</Route>
  		</Router>
  </Provider>
  , document.querySelector('.container'));
