var express = require('express');
var react = require('react');
var path = require('path');

const server = express();
server.use('/assets', express.static(path.join(__dirname, '..', '..', 'dist', 'assets'))) // express.static('assets'));

server.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './views/index.html'));
});

server.listen(8080);
console.log('listening');
