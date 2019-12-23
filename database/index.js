const mongoose = require('mongoose');
mongoose.connect('mongodb://ahmedehsouna:Fibonacci112358@ds257698.mlab.com:57698/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!

  repo_id: Number,
  name: String,
  full_name: String,
  description: String,
  html_url: String,
  forks : Number,
  owner : String,

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (json,username,callback) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  Repo.find({owner : username} , (err , data) => {
    if(data.length != 0){
      Repo.remove({owner : username}, (err, data) =>{
      })
    }
        Repo.create(json , (err , done) => {
            callback(err, done)
      })

  })
}

module.exports = {
  save,
  Repo
}