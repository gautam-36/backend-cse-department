const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "please Enter title"],
       
    },
    facultyName: {
        type: String,
        // required: [true, "please Enter Faculty name"],
       
    },
    date: {
        type: String,
        required: [true, "please enter the password"],
    },
    url: {
        type: String,
        default: ""
    }
})






const Publication = mongoose.model('Publication', publicationSchema);

module.exports = Publication;