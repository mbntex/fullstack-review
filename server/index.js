const express = require('express');
var bodyParser = require('body-parser');
var githubHelperFn = require('../helpers/github.js');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

////
var url = require('url');
var dB = require('../database/index.js');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
///

app.post('/repos', function (req, res) {
  githubHelperFn.getReposByUsername(req.body.query, dB.save);
  console.log('POST REQ.BODY =', req.body, ' POST searched for = ', req.body.query);
  //console.log('REQ BODY = ', JSON.parse(req.body)); //why not working???
  res.send('complete');
});

app.get('/repos', function (req, res) {
  // console.log('GETREQ.URL =', req.url);
  // var parsedURL = url.parse(req.url);
  // console.log('PARSED GET URL ' , parsedURL);
  //console.log('GET SEARCH TERM FROM URL = ', typeof req.url);
  dB.find(function(item){console.log('XXXXX', item)}); 
  //dB.find(function(item){res.send(item)});
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});




