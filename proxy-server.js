var express = require('express');
var request = require('superagent');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Content-Type","application/JSON");
  next();
});
// respond with "hello world" when a GET request is made to the homepage
app.post('/*', function(req, res) {
  console.log('==============');
  console.log(req.url);
  console.log(req.headers);
  console.log(req.body);
  console.log('==============');
  request.post('https://softuken2016.mybluemix.net' + req.url)
    .set("Content-Type","application/JSON")
    .send('{}')
    .end((err,_res)=>{
      res.send(_res.body);
      res.end();
    })
});

app.listen(3030);
