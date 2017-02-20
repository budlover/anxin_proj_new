var express = require('express');
var react = require('react');
var path = require('path');

const server = express();
server.use('/assets', express.static(path.join(__dirname, '..', '..', 'dist', 'assets'))); // express.static('assets'));

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'jade');

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
server.get('/', function(req, res) {
    sql.execute({
        query: 'select TOP 10 * from vBOM_LOCATION_USER'
    }).then( function(rows) {
        console.log(rows);
        res.render('index', {
            rows: rows
        });
    }, function(err) {
        console.log("Something bad happened: ", err);
    });
});

server.listen(8080);
console.log('listening');
