import React from 'react';

const RepoListDataRender = (props) => (
  <div>
    <ol>
      <li>
        <p>Username: {props.info[0].gitUserName}</p>
        <p>Repo Name: {props.info[0].gitRepoName}</p>
        <p>Description: {props.info[0].gitDescription}</p>
        <p>URL: {props.info[0].gitRepoURL}</p>
      </li>
    </ol>
  </div>
)

export default RepoListDataRender;


