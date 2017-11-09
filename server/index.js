const express = require('express');
var bodyParser = require('body-parser');
var githubHelperFn = require('../helpers/github.js');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

////
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
///

app.post('/repos', function (req, res) {
  githubHelperFn.getReposByUsername(req.body.query);
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  // console.log('SERVER POST RECEIVED!!!');
  //console.log('REQ = ', req);
  console.log('REQ.BODY =', req.body, ' searched for = ', req.body.query);
  //console.log('REQ BODY = ', JSON.parse(req.body)); //why not working???
  

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});




