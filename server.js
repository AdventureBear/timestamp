var express = require('express');
var app = express();

var moment = require('moment');
moment().format();

var returnObj = {};

app.get('/:input', function( req, res){

  var input = req.params.input;
  var dateFromString = moment(input);
  var validDateStr = dateFromString.isValid();

  console.log("Input is: ", input);
 
  console.log("Valid Date from string?", validDateStr);

  //if it is an input containing natural language elements
  //try converting to a date format & display
    if (validDateStr) {
      //returnObj = {'unix': dateFromString.unix(), 'date':dateFromString };
      res.send(dateFromString);
    } else {
      res.send("Input cannot form a valid date");
    }



});


  app.get("/",function(req,res){
    res.end( "<h2>API Basejump: Timestamp microservice</h2>" +
      "<p>For more information visit this link <a href='https://timestamp-ms.herokuapp.com/'>link</a>" +
      "</P>");
  });

app.listen(8080, function () {
  console.log('Timeserver microapp listening on port 8080!');
});



