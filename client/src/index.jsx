import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: [
{
                gitDescription: "No Repos Yet",
                gitRepoID: "No Ids Yet",
                gitRepoName: "No Names Yet",
                gitRepoURL: "No URL Yet",
                gitUserName: "No UserName Yet"
              }

      ]
    }
  }

    
  componentDidMount() {
    console.log('TEST1234!!!!');
    console.log('THE STATE = ', this.state.repos);
    $.ajax({
      url: '/repos',
      //data: {query: term},
      success: function (data) {
        //console.log('DATA FROM INITGET REQUEST ', data);
        this.setState({repos: data})
      }.bind(this)
      //dataType: dataType
    });
  }

  search (term) {
    console.log(`${term} was searched`);
    //var URL = 'http://127.0.0.1';
    $.ajax({
      type: "POST",
      url: '/repos',
      //data: JSON.stringify({query: term}),
      data: {query: term},
      success: function (data) {
        console.log('Post Worked!');
        console.log('RES = ', data);
        //makeGetRequest();
      },
      error: function (error) {
        console.log('Post Failed!');
      }
      //dataType: dataType
    });

    //var makeGetRequest = function() {
    $.ajax({
      url: '/repos',
      success: function (data) {
        //console.log('DATA FROM INITGET REQUEST ', data);
        this.setState({repos: data})
      }.bind(this)
    });

    //}

  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));




