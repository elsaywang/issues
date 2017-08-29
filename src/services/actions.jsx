import { GET_ISSUES_OF_ONE_REPO, GET_ALL_AVAILABLE_REPOS,REQUEST_FAILED
		} from './types';

const httpRequest = (url, method, data) => 
    fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

export const getAllIssuesOfRepo=(url)=>{
	return dispatch=>{
		return httpRequest(url,'GET')
		.then(resp=>{
			if(!resp.ok){
				 throw new Error(resp.statusText);
			}
			console.log(resp);
			return resp;
		})
		.then(resp=>resp.json())
		.then(body=>{
			const issues = body.map(obj=>obj.html_url);
			console.log(issues);
			dispatch(getIssuesOfRepo(issues));
		})
		.catch(err=>{
			dispatch(getRequestFailed(err));
		});
	};
};

export const getRepos = avail=> dispatch=>dispatch(getAllRepos(avail));

export const getAllRepos =(repos)=>({
	type:GET_ALL_AVAILABLE_REPOS,
	data: repos
});

export const getIssuesOfRepo =(issues)=>({
	type:GET_ISSUES_OF_ONE_REPO,
	data:issues
});

export const getRequestFailed = (err)=>({
	type:REQUEST_FAILED,
	error:err
});

