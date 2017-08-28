import { GET_ISSUES_OF_ONE_REPO, GET_ALL_AVAILABLE_REPOS,REQUEST_FAILED
		} from './types';

const httpRequest = (url, method, data) => (
    fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    }));

export const getAllIssuesOfRepo=(url)=>{
	return dispatch=>{
		return httpRequest(url,'GET')
		.then(resp=>{
			if(!resp.ok){
				 throw new Error(resp.statusText);
			}
			return resp;
		})
		.then(resp=>resp.json())
		.then(body=>{
			dispatch(getIssuesOfRepo(resp));
		})
		.catch(err=>{
			dispatch(getRequestFailed(err));
		});
	}
};

export const getRepos = (avail) => dispatch => dispatch(getAllRepos(avail));

const getAllRepos =(repos)=>({
	type:GET_ALL_AVAILABLE_REPOS,
	data: repos
});

const getIssuesOfRepo =(resp)=>({
	type:GET_ISSUES_OF_ONE_REPO,
	payload:resp
});

const getRequestFailed = (err)=>({
	type:REQUEST_FAILED
	error:err
})