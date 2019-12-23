let express     = require('express'),
    bodyParser  = require("body-parser"),
    fetch       = require("fetch").fetchUrl,
    Saver       = require("../database/index.js").save,
    Repo        = require("../database/index.js").Repo,
    helper      = require('../helpers/github.js').getReposByUsername,
    app         = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/../client/dist'));


app.post('/repos', function (req, res) {
    // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

      helper(req.body.username, (err,done) =>{
          if(err) res.json(err)
          else res.json(done)
      })
    // }
  // })

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  Repo.find({}).limit(25).exec((err , data)=>{
    res.json(data)

  })

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

