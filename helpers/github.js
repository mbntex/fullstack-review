const request = require('request');
const config = require('../config.js');

let getReposByUsername = (userName, callback) => {
  console.log('getReposByUsername RAN!!! userName here = ', userName);


  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    //url: 'https://api.github.com/search/users',
    url: 'https://api.github.com/users/octocat/repos',
    //q: userName,
    //sort: 'repositories',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, function(err, res, body) {
    console.log('getReposByUsername RESULTS HERE!!!');
    console.log('error: ', err );
    console.log('response & statusCode: ', res && res.statusCode);
    console.log('body: ', JSON.parse(body));
    // var parsedBody = JSON.parse(body);
    // var processData = function (githubData) {
    //   var (i = 0; i < githubData.length; i++) {
    //     console.log('NAME = ', githubData[i].name);
    //   }
    // }
   })
}

module.exports.getReposByUsername = getReposByUsername;