import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import {
  AUTH_USER,
  UNAUTH_USER
} from '../actions/types';
import todos from './todos';
import visibilityFilter from './visibilityFilter';



	const rootReducer = combineReducers({
  		form,
  		todos,
  		visibilityFilter,
  		auth: authReducer

	});

export default rootReducer;
