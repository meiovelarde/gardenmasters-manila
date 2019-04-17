var express = require('express');
var app = express();
var server = require('http').Server(app);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/clients', function(req, res){
  res.sendfile(__dirname + '/public/clients.html');
})

server.listen(8081, function () {
  // eslint-disable-next-line no-console
  console.log(`Listening on ${server.address().port}`);
});
