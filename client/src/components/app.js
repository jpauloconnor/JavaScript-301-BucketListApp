import React, { Component } from 'react';
import NavBarHeader from './Nav';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

	export default class App extends Component {
  		render() {
    			return (
      			<div>
	      			<NavBarHeader />
	      			<AddTodo />
   					<VisibleTodoList />
    				<Footer />
      			</div>
    			);
  		}
	}
