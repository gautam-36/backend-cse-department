const mongoose = require('mongoose');

const importantDatesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "please Enter title"],
       
    },
    date: {
        type: String,
        required: [true, "please enter the password"],
    },
    description: {
        type: String,
        default: ""
    }
})






const ImportantDates = mongoose.model('ImportantDates', importantDatesSchema);

module.exports = ImportantDates;