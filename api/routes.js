const express = require('express');
const router = express.Router();
const Period = require('./models/period.js');

// GET Objects from Params
router.param('pID', (req, res, next, id) => {
    Period.findById(id, (err, doc) => {
        if (err) return next(err);
        if (!doc) {
            err = new Error('Not Found');
            err.status = 404;
            return next(err);
        }
        req.period = doc;
        return next();
    });
});

// GET ROUTES

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
    var period = new Period(req.body);
    period.save((err, period) => {
        if (err) return next(err);
        res.status(201);
        res.json(period);
    });
});


// PUT ROUTES

// PUT /periods/:pID
// Route for updating a specific period
router.put('/periods/:pID', (req, res, next) => {
    console.log(`Update period ${req.period}`);

    req.period.update(req.body)
        .exec((err, period) => {
            if (err) return next(err);
            return res.json(period);
        });
});

// DELETE ROUTES

// DELETE /periods/:pID
// Route for deleting a specific period
router.delete('/periods/:pID', (req, res, next) => {
    console.log(`Delete period ${req.period}`);

    req.period.remove((err) => {
        if (err) return next(err);
        return res.json(`Successfully removed period!`);
    });
});


module.exports = router;