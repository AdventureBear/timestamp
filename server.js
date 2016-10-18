var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.put('/:time', function( req, res){
  var time = req.params.time;
  res.send(time);

});



app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});


/**
 * Created by suzanne on 10/16/16.


var express = require('express');
var app = express();

var port = process.argv[2];

app.put('/message/:id', function(req, res){
  var id = req.params.id;
  var hash = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex');

  res.send(hash);

});

 */


