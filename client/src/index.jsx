import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

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
      },
      error: function (error) {
        console.log('Post Failed!');
      }
      //dataType: dataType
    });


    $.ajax({
      url: '/repos',
      //data: {query: term},
      success: function (data) {
        console.log('DATA FROM GET REQUEST ', data);
      }
      //dataType: dataType
    });

    componentDidMount() {
      console.log('TEST1234!!!!');
    // fetch(API + DEFAULT_QUERY)
    //   .then(response => response.json())
    //   .then(data => this.setState({ hits: data.hits }));
  }


  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));




