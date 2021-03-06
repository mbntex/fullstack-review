const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', { useMongoClient: true });

//////
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('DATABASE RUNNING!')
});

///////


let repoSchema = mongoose.Schema({
  gitUserName: String,
  gitRepoID: { type : String , unique : true },
  gitRepoName: String,
  gitDescription: String,
  gitRepoURL: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data, callback) => {
  //console.log('DATA TO BE SAVED = ', data);


  var currentRepo = new Repo({
    gitUserName: data.userName,
    gitRepoID: data.repoId,
    gitRepoName: data.repoName,
    gitDescription: data.repoDescription,
    gitRepoURL: data.repoURL
    });

  currentRepo.save(
    function(err) {
      if (err) {
        console.log('ERROR SAVING TO DATABASE!')
      } else {
        console.log('SAVED TO DATABASE!');
      }
    }
  )
}


let find = (callback) => {
  //var mongoData = Repo.find({}).limit(2);  //limit responses returned?
  //callback(Repo.find({})); //Why does this fail?
  Repo.find({}, function(err, data){
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });  
  
}









module.exports.find = find;
module.exports.save = save;