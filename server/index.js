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
  //dB.find(function(item){console.log('jkjkjkjkj', item)}); 
  dB.find(function(err, data) { 
    if (err) {
      console.log(err);
    } else {      
    res.send(data) 
    }
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});




//////
//dB.find(function(item){console.log('GHGHGH', item)}); 
  // dB.find(function(item) { console.log(typeof item )});
  // dB.find((err, results) => {
  //   if (err) {
  //     throw err;
  //   } else {
  //     res.send(results);
  //   }
  // })
  //res.send()
//   dB.Repo.find({}).limit(25).exec(function(err, results) {
//     if (err) {
//       throw err;
//     } else {
//       res.send(results);
//     }
//   })
// });