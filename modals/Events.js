const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
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
    },
    image: {
        type: String,
        
    }
})






const Events = mongoose.model('Events', eventsSchema);

module.exports = Events;