import React, { Component } from 'react';
import { connect } from 'react-redux';
import './RepoList.css';
import {GET_ALL_ISSUES} from './services/apis';
import { getAllIssuesOfRepo, getRepos} from './services/actions';

class RepoList extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	current_repo:''
	  };
	}
	componentDidMount() {
		this.props.getRepos(GET_ALL_ISSUES()); 
	}

	handleEvent=(event)=>{
		event.preventDefault();
    	const api = event.target.text;
    	this.setState({current_repo:api});
    	console.log(api);
    	this.props.fetchIssues(api);
	}
	render(){
		let main_class = this.state.current_repo ? "col-md-5" : "col-md-12"
		return(<div className="row">
    		<div className={main_class}>
    			<div className = 'text-center'>
            		All Issues Repositories
        		</div>
				<div >
            		<ul className = 'text-center'>
          				{ this.props.allRepos.map((element,i) => <li key ={i}> <a onClick={this.handleEvent} href={element}>{element}</a></li> )}
        			</ul>
        		</div>
    		</div>
    		{this.state.current_repo ? 
    		<div className="col-md-7">
    			<p>Issues of Repo <code>{this.state.current_repo}</code></p>
        		<ul>
        			{this.props.IssuesOfOne.map((item,i)=><li key={i}><a href={item} target="_blank">{item}</a></li>)}
        		</ul>
    		</div> : null  }
		</div>)
	}
}


const mapStateToProps = (state) => (console.log(state),{
  allRepos:state.allRepos,
  IssuesOfOne:state.IssuesOfOne,
  error:state.failedMessage
});

const mapDispatchToProps = {
  fetchIssues: getAllIssuesOfRepo,
  getRepos : getRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
