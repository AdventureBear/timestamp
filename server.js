var express = require('express');
var app = express();

var moment = require('moment');
moment().format();

app.get('/:input', function( req, res){
  var input = req.params;
  var m = moment("input");
  //console.log(input);
  console.log("Valid Date?", m.isValid());
  res.send(m);
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(8080, function () {
  console.log('Timeserver microapp listening on port 8080!');
});



