const request = require('request');
const config = require('../config.js');

let getReposByUsername = (userName, callback) => {
  console.log('getReposByUsername RAN!!! userName here = ', userName);


  // TODO - Use the request module to request repos for a specific
  // user from the github API

  let options = {
    url: `https://api.github.com/users/${userName}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };


  request(options, function(err, res, body) {
    if (err) {console.log('ERROR', err)}
    if (res) {console.log('response & statusCode: ', res && res.statusCode)} //<-- why is res empty when consoled here?
    if (body) {
      var parsedBody = JSON.parse(body); 
      console.log('body:', parsedBody); 
      var parsedBody = JSON.parse(body);

        for (var i = 0; i < parsedBody.length; i++) {
          var temp = {userName: userName, name: parsedBody[i].name, description: parsedBody[i].description, repoURL: parsedBody[i].url};
          console.log(temp);
          callback(temp);
        }
    }
  })
}

module.exports.getReposByUsername = getReposByUsername;