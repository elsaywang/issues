import { combineReducers } from 'redux';
import { GET_ISSUES_OF_ONE_REPO, GET_ALL_AVAILABLE_REPOS, 
		REQUEST_FAILED, SORT_ISSUES_BY_PRIORITY } from './types';

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
};

const getSortedListReducer = (state=[],action) =>{
	switch(action.type){
		case SORT_ISSUES_BY_PRIORITY:
			return action.data;
		default:
			return state;
	}
}
const rootReducer=combineReducers({
	allRepos: getAllreposReducer,
	IssuesOfOne: getIssuesOfRepoReducer,
	failedMessage: getRequestFailedReducer,
	sortedIssueList:getSortedListReducer
});

export default rootReducer;