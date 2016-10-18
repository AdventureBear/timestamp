var express = require('express');
var app = express();

var moment = require('moment');
moment().format();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/:input', function(req, res){
  var input = req.params.input;
  var date = moment(input);
  var validDate = date.isValid();

  console.log("Valid Date?", validDate);

  if (validDate) {
    res.send(date)
  } else {
    res.send("Invalid date");
  }

});

app.listen(8080, function () {
  console.log('Timeserver microapp listening on port 8080!');
});
