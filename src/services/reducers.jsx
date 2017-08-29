import { combineReducers } from 'redux';
import { GET_ISSUES_OF_ONE_REPO, GET_ALL_AVAILABLE_REPOS, 
		REQUEST_FAILED } from './types';

const getAllreposReducer = (state=[],action)=>{
	switch (action.type){
		case GET_ALL_AVAILABLE_REPOS:
			return action.data;
		default:
			return state;
	} 
};

const getIssuesOfRepoReducer = (state=[],action) =>{
	switch (action.type){
		case GET_ISSUES_OF_ONE_REPO:
			return action.data;
		default:
			return state;
	} 
};

const getRequestFailedReducer =(state=null,action)=>{
	switch (action.type){
		case REQUEST_FAILED:
			return action.error;
		default:
			return state;
	}
}
const rootReducer=combineReducers({
	allRepos: getAllreposReducer,
	IssuesOfOne: getIssuesOfRepoReducer,
	failedMessage: getRequestFailedReducer
});

export default rootReducer;