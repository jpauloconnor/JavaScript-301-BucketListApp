import React from 'react';
import { Route, IndexRoute } from 'react-router';

import PostApp from './post-app';
import PostsIndex from './posts-index';
import PostsNew from './posts-new';
import PostsShow from './posts-show';
// const Greeting = () => {
// 	return <div>Hey</div>
// }

// add this code into the export default to test routing
// <Route path="/greet" component={Greeting} />
// <Route path="/greet2" component={Greeting} />
// <Route path="/greet3" component={Greeting} />

//this route path says when route is 
//called render App

export default (
	<Route path="/" component={App}>
		<IndexRoute component={PostsIndex} />
		<Route path="posts/new" component={PostsNew} />
		<Route path="posts" component={PostsShow} /> 
	</Route>
);

//posts/:id (param) react-router parses this as this.props.params.id