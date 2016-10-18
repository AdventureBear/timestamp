// initially written with
// node.js  v0.12.0
var express = require('express');
var app = express();
var cool = require('cool-ascii-faces');
//var port = 5000;

var moment = require('moment');
moment().format();

var returnObj = {};


app.set('port', (process.env.PORT || 5000))
app.use(express.static('.'));

app.get ('/cool', function(req, res){
  res.send(cool());
})


app.get('/:input', function( req, res){

  var input = req.params.input;
  var dateFromString = moment(input);
  var validDateStr = dateFromString.isValid();

  console.log("Input is: ", input);

  console.log("Valid Date from string?", validDateStr);

  //if input string is a number, assume unix timestamp
    if(!isNaN(input)){
      console.log(input, "Looks like a number");
      returnObj = {'unix':input, 'natural':moment.unix(input).format("MMM Do, YYYY")};
      res.send(returnObj);

    }

  //if it is an input containing natural language elements
  //try converting to a date format & display
    if (validDateStr) {
      returnObj = {'unix': dateFromString.unix(), 'natural':dateFromString.format("MMM Do, YYYY") };
      res.send(returnObj);
    } else {
      returnObj = {'unix': null, 'natural': null};
      res.send(returnObj);
    }



});



  app.get("/",function(req,res){

    res.send('index.html');

  });



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



