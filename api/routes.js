const express = require('express');
const router = express.Router();
const Period = require('./models/period.js');

// Get all periods
router.get("/", (req, res) => {
    console.log(`Root!`);
    
    // next();

});

router.get("/api/periods", (req, res, next) => {
    console.log(`Get all periods!`);
    Period.find((err, periods) => {
        if (err) return next(err);
        console.log(`periods found? ${periods}`);
        return res.json(periods);
    });

    // Period.find({}).then(eachOne => {
    //     if
    //     return res.json(eachOne);
    // });

    // next();
});

module.exports = router;