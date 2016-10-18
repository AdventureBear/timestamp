var express = require('express');
var app = express();

var moment = require('moment');
moment().format();

app.get('/:input', function( req, res){
  var input = req.params.input;
  console.log("Input is: ", input);
  //var m = Date.parse(input);
  if (isNaN(input)) {
    console.log("Input param is not a number:", isNaN(input));
    var munix = (new Date(input).getTime())/1000;
    console.log("Unix time (sec) from Date is: ", munix);
    //if (m.isValid){
      res.sendStatus(m);
    //}
  } else {
    console.log("Input Param is not a number:", isNaN(input));
    var m = moment.unix(toString(input))._d;
    console.log("Date from Unix time is: ", m);
      res.sendStatus(m);

    }



});


  app.get("/",function(req,res){

    res.end( "<h1>API Basejump: Timestamp microservice</h1>" +
      "<p>For more information visit this link <a href='https://timestamp-ms.herokuapp.com/'>link</a>" +
      "</p>");


  });

app.listen(8080, function () {
  console.log('Timeserver microapp listening on port 8080!');
});



