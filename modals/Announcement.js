const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, "please Enter title"],
       
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






const Announcement = mongoose.model('Announcement', announcementSchema);

module.exports = Announcement;