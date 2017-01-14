/*Beginning of the Server server*/
var express = require('express');
var server = express();
var path = require('path');
var mongodb = require('mongodb').MongoClient;
var assert = require('assert');



const port = 3000;
server.use('/app', express.static(__dirname + '/app'));
server.use('/scripts', express.static(__dirname + '/node_modules'));
server.use('/node_modules', express.static(__dirname + '/node_modules'));

server.get('*', function(req, res){
   res.sendfile(path.join(__dirname + '/app/index.html'))
});
console.log('Starting server! Listen on ' + port);

server.listen(port);
