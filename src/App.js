import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import RepoList from './RepoList';
import {GET_ALL_ISSUES} from './services/apis';
import { getAllIssuesOfRepo, getRepos} from './services/actions';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount() {
    this.props.getRepos(GET_ALL_ISSUES());
    //console.log(this.props.allRepos);
  }
  render() {
    return (
      <div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Git Issues Portal</h2>
        </div>
      </div>
      <RepoList/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allRepos:state.allRepos,
  IssuesOfOne:state.IssuesOfOne,
  error:state.failedMessage
});

const mapDispatchToProps = {
  fetchIssues: getAllIssuesOfRepo,
  getRepos : getRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(App);