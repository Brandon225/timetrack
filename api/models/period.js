const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const PeriodSchema = new Schema({
    startTime: {
        type: Date,
        required: true,
    },
    hours: {
        type: String,
        required: true,
    },
    paid: {
        type: Boolean,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
})

const Period = mongoose.model('Period', PeriodSchema);

module.exports = Period;