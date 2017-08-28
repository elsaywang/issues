export const get_issues_repo=(REPO_OWNER,REPO_NAME)=>{
  let api_map={
		APP_HOME:'https://api.github.com/repos',
		ISSUES:`/${REPO_OWNER}/${REPO_NAME}`
	};
  return `${api_map.APP_HOME}${api_map.ISSUES}/issues`;
};

export const repo_info =[{
	repo_owner:'vmg',
	repo_name:'redcarpet'
},{
	repo_owner:'octocat',
	repo_name:'Spoon-Knife'
},
{
	repo_owner:'facebook',
	repo_name:'react'
},
{
	repo_owner:'twbs',
	repo_name:'bootstrap'
},
{
	repo_owner:'angular',
	repo_name:'angular'
}
];

export const GET_ALL_ISSUES=()=>{
	let all_issues = [];
	repo_info.map(obj=>(
		all_issues.push( get_issues_repo(obj.repo_owner,obj.repo_name) )
	));
	return all_issues;
}

