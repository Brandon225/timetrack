const express = require('express');
const router = express.Router();
const Period = require('./models/period.js');


// GET ROUTES

// GET /
// Root directory
// router.get("/", (req, res) => {
//     console.log(`Root!`);
// });

// GET /api/periods
// Route for getting periods
router.get("/periods", (req, res) => {
    console.log(`Get all periods!`);
    Period.find((err, periods) => {
        if (err) return next(err);
        console.log(`periods found? ${periods}`);
        return res.json(periods);
    });

});

// POST ROUTES

// POST /periods
// Route for creating periods
router.post('/periods', (req, res, next) => {

    console.log(`create period!`);

    console.log(`req body start_time? ${req.body.start_time}`);

    var period = new Period(req.body);
    period.save((err, period) => {
        if (err) return next(err);
        res.status(201);
        res.json(period);
    });
});

module.exports = router;