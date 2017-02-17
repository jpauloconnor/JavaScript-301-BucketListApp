import axios from 'axios';
import { 
  FETCH_POSTS,
  CREATE_POSTS,
  FETCH_POST,
  DELETE_POST,
  ROOT_URL

 } from './types';

export function fetchPosts() {

	const request = axios.get(`${ROOT_URL}`);

	return {
		type: FETCH_POSTS,
		payload: request
	};
}

export function createPost(props) {
	const request = axios.post(`${ROOT_URL}`, props);

	return {
		type: CREATE_POSTS,
		payload: request
	};
}

export function fetchPost(id) {
	const request = axios.get(`${ROOT_URL}`);
	return {
		type: FETCH_POST,
		payload: request
	};
}

export function deletePost(id) {
	const request = axios.delete(`${ROOT_URL}`)
	return {
		type: DELETE_POST,
		payload: request
	};
}