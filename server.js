/*Beginning of the Server server*/
var express = require('express');
var server = express();
var path = require('path');


var port = process.env.PORT || 3000;
server.use(express.static('app'));
server.get('/', function(req, res){
   res.sendfile(path.join(__dirname + '/app/index.html'))
});
server.listen(port);
