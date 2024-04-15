const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique:true
    },
    batchYear: {
        type: Number,
        required: [true, 'Batch year is required'],
    },
    classs: {
        type: String,
        required: [true, 'class is required'],
    },
    stream: {
        type: String,
        required: [true, 'Stream is required'],
    },
    company: {
        type: String,
        required: [true, 'Department is required'],

    },
    position: {
        type: String,
        required: [true, 'Roll number is required'],
    },
    roll: {
        type: String,
        required: [true, 'Roll number is required'],
        unique: true,
    },
    image: {
        type: String,
    }
});

const Alumni = mongoose.model('Alumni', alumniSchema);

module.exports = Alumni;