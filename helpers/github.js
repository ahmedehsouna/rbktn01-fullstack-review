// const request   = require('request');
const config    = require('../config.js');
const Saver     = require("../database/index.js").save,
fetch       = require("fetch").fetchUrl


let getReposByUsername = (username,callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  fetch(`https://api.github.com/users/${username}/repos`, options , (err , meta ,data) =>{
    if(err){
      console.log(err)
    }else {
      var response = JSON.parse(data + "")
      response.map(one => {
        one.owner = one.owner.login
        return one
      })
      Saver(response, username, (err, done)=>{
          callback(err,done)
      })

    }
})

}

module.exports.getReposByUsername = getReposByUsername;