const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: {
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






const News = mongoose.model('News', newsSchema);

module.exports = News;