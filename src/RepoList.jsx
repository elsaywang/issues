import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'underscore' ; 
import './RepoList.css';
import {GET_ALL_ISSUES} from './services/apis';
import { getAllIssuesOfRepo, getRepos,getSortedList } from './services/actions';

class RepoList extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	current_repo:'',
	  	IssuesOfOne:[]
	  };
	}
	componentDidMount() {
		this.props.getRepos(GET_ALL_ISSUES()); 
	}

	componentWillReceiveProps(nextProps) {
		/*Only when user clicks a new Repo, redux will reset the sortedList,
		if user clicks the same Repo, and the order of which is sorted already, then 
		the order will remain.
		*/
		if (!_.isEqual(nextProps.IssuesOfOne,this.props.IssuesOfOne)){
			this.props.getSortedList([]);
		}
	}

	handleEvent=(event)=>{
		event.preventDefault();
		const api = event.target.text;
		this.setState({current_repo:api});
 		console.log(api);
		this.props.fetchIssues(api);
 		this.setState({IssuesOfOne:this.props.IssuesOfOne})
	}

	sortBy=(event)=>{
		const sorted= _.sortBy(this.props.IssuesOfOneAll,(o)=>o.comments).reverse();
		//console.log(sorted);
		const sorted_issuelist = sorted.map(obj=>obj.html_url);
		//console.log(sorted_issuelist);
		this.props.getSortedList(sorted_issuelist);
	}


	render(){
		let main_class = this.state.current_repo ? "col-md-5" : "col-md-12",
		list = this.props.sortedIssueList.length>0 ? this.props.sortedIssueList:this.props.IssuesOfOne,
		label = this.props.sortedIssueList.length === 0 ? 'Click to Sort By Priority':'Sorted',
		buttonStyle = this.props.sortedIssueList.length === 0 ? "btn btn-default":"btn btn-info";
		
		return(<div className="row">
    		<div className={main_class}>
				<div className = 'text-center'>
            		All Issues Repositories
        		</div>
				<div>
					<ul className = 'text-center'>
          				{ this.props.allRepos.map((element,i) => <li key ={i}> <a onClick={this.handleEvent} href={element}>{element}</a></li> )}
					</ul>
				</div>
    		</div>
    		{this.state.current_repo ? 
    		<div className="col-md-7">
    			<p>Issues of Repo <code>{this.state.current_repo}</code></p>
    			<button type="button" onClick={this.sortBy} className={buttonStyle}>{label}</button>
        		<ul>
        			{list.map((item,i)=><li key={i}><a href={item} target="_blank">{item}</a></li>)}
        		</ul>
    		</div> : null  }
		</div>)
	}
}


const mapStateToProps = (state) => ({
  allRepos:state.allRepos,
  IssuesOfOneAll: state.IssuesOfOne,
  IssuesOfOne:state.IssuesOfOne? state.IssuesOfOne.map(obj=>obj.html_url):null,
  sortedIssueList: state.sortedIssueList,
  error:state.failedMessage
});

const mapDispatchToProps = {
  fetchIssues: getAllIssuesOfRepo,
  getRepos : getRepos,
  getSortedList: getSortedList
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
