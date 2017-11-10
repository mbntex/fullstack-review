import React from 'react';

const RepoListSpecificItem = (props) => (
  <div>
      <li>
        <p>Username: {props.repos[0].gitUserName}</p>
        <p>Repo Name: {props.repos[0].gitRepoName}</p>
        <p>Description: {props.repos[0].gitDescription}</p>
        <p>URL: {props.repos[0].gitRepoURL}</p>
      </li>
  </div>
)

export default RepoListSpecificItem;




