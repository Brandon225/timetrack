const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');


const app = express();

// mongodb connection
mongoose.connect("mongodb://localhost:27017/timetrack_db");

var db = mongoose.connection;
// mongo error
db.on('error', console.error.bind(console, 'connection error: '));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// include routes
var routes = require('./routes');
app.use('/', routes);


// app.get("/", (req, res, next) => {
//     console.log(`Root directory!`);

//     next();

// });

// app.get("/api/sessions", (req, res, next) => {
//     console.log(`Get all sessions!`);

//     next();

// });

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

    // res.status(err.status || 500);
    // res.render('error', {
    //     message: err.message,
    //     error: {}
    // });
});

// listen on port 3000
app.listen(3000, function () {
    console.log('Express app listening on port 3000');
});
