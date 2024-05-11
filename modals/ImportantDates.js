const mongoose = require('mongoose');

const importantDatesSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, "please Enter description"],

    },
    date: {
        type: String,
        // required: [true, "please enter the date"],
    },
    url: {
        type: String,
        default: ""
    }
})






const ImportantDates = mongoose.model('ImportantDates', importantDatesSchema);

module.exports = ImportantDates;