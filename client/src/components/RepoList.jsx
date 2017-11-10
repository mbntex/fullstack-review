import React from 'react';
//mapping 
// ajax in react and changing state
// react mapping
// mongo start and duplicates
// err res format
//issue with creating more files and bundle / webpack?

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <RepoListDataRender info={props.repos}/>
  </div>
)



const RepoListDataRender = (props) => (
  <div>
    <ol>
      {props.info.map((item, index) => 
        <RepoListDataRenderItem info={item} key={index}/>
      )}    
    </ol>
  </div>
)




class RepoListDataRenderItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {
    return (
    <div>   
      <li>
        <p>Username: {this.props.info.gitUserName}</p>
        <p>Repo Name: {this.props.info.gitRepoName}</p>
        <p>Description: {this.props.info.gitDescription}</p>
        <a href={this.props.info.gitRepoURL}>URL: {this.props.info.gitRepoURL}</a>
      </li>
    </div>
    )
  }
}










export default RepoList;


