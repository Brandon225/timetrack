const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');


const app = express();

// mongodb connection
const url = process.env.MONGOLAB_URI;
// const url = "mongodb://localhost:27017/timetrack_db;
mongoose.connect(url);

var db = mongoose.connection;
// mongo error
db.on('error', console.error.bind(console, 'connection error: '));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// include routes
var routes = require('./routes');
app.use('/api', routes);

// // catch 404 and forward to error handler
app.use(function (req, res, next) {
    console.log('File not found!!');
    var err = new Error('File Not Found');
    err.status = 404;
    next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {

    console.log(`Error! ${err} ${err.status} ${err.message}`);
    next(err);

});

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
    console.log('Express app listening on port 3000');
});

