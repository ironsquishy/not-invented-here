/*Beginning of the Server server*/
var express = require('express');
var server = express();
var path = require('path');


const port = 3000;
server.use(express.static('app'));
server.get('/', function(req, res){
   res.sendfile(path.join(__dirname + '/app/index.html'))
});
console.log('Starting server! Listen on ' + port);

server.listen(port);
