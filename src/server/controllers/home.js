var express = require('express');
var router = express.Router();

const rows = [
    { name: 'Jack', age: 28, address: 'some where', key:'1' },
    { name: 'Rose', age: 36, address: 'some where', key:'2' }
];

// route
router.get('/', function(req, res) {
    // sql.execute({
    //     query: 'select TOP 10 * from vBOM_LOCATION_USER'
    // }).then( function(rows) {
    //     console.log(rows);
    //     res.render('index', {
    //         rows: rows
    //     });
    // }, function(err) {
    //     console.log("Something bad happened: ", err);
    // });
    res.render('index', {
        rows: rows
    });
});

// route
router.post('/', function(req, res) {
    console.log("haha post");
    var filterKeys = req.body.filterKeys;
    var filterValues = req.body.filterValues;
    console.log("filterValues: " + filterKeys);
    console.log("filterValues: " + filterValues);


    res.render('index', {
        rows: rows
    });
});

module.exports = router;
