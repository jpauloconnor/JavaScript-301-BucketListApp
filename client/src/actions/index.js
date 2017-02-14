import axios from 'axios';
import { browserHistory } from 'react-router';
import { 
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE

 } from './types';

import authReducer from '../reducers/auth_reducer';

const ROOT_URL = 'http://localhost:3000';

export function signinUser({ email, password }){
	return function(dispatch){
		
		axios.post(`${ROOT_URL}/signin`, {email, password})
 			.then(response => {
 		
 				dispatch({ type: AUTH_USER });
 				localStorage.setItem('token', response.data.token);
 				browserHistory.push('/feature');
      	
      	 })
      		.catch(response =>  dispatch(authError("Bad login info")));

		}
}

export function signoutUser(){
   localStorage.removeItem('token'); 
   return {type: UNAUTH_USER};
}

export function signupUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({type: AUTH_USER});
          
          //update the token
          localStorage.setItem('token', response.data.token);
          browserHistory.push('/landing');
      })
      .catch(response => dispatch(authError(response.data.error)));
  }
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        });
      });
  }
}



export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}