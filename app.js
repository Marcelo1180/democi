var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/demo', function (req, res) {
  res.send('Demo!');
});

app.get('/adrian  ', function (req, res) {
  res.send('Creer!');
});

app.listen(3335, function () {
  console.log('Example app listening on port 3335!');
});
