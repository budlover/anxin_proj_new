const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const server = express();
const port = 8080;

server.use('/assets', express.static(path.join(__dirname, '..', '..', 'dist', 'assets'))); // express.static('assets'));
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'jade');

// support json encoded bodies
server.use(bodyParser.json());
// support encoded bodies
server.use(bodyParser.urlencoded({extended:true}));

// connect to sql server
var sql = require("seriate");
var config = {
    "server": 'localhost',
    "user": 'nxa27833',
    "password": 'Happy@2016',
    "database": 'webpage',
    "domain": 'WBI',
    "port": '49174'
};
sql.setDefaultConfig(config);

// route
server.use(require('./controllers'));

server.listen(port);
console.log('listening port: ' + port);
