const mongoose = require('mongoose');
const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, ' Email is required'],
        unique: true,
    },
    phone: {
        type: Number,
        required: [true, 'Phone number year is required'],
        unique: true,
    },
    joinYear: {
        type: Number,
        required: [true, 'Joining year is required'],
    },
    confrence: {
        type: Number,
        // required: [true, 'Batch year is required'],
    },
    teaching: {
        type: Number,
        // required: [true, 'Batch year is required'],
    },
    research: {
        type: Number,
        // required: [true, 'Batch year is required'],
    },
    national: {
        type: Number,
        // required: [true, 'Batch year is required'],
    },

    international: {
        type: String,
        // required: [true, 'class is required'],
    },
    designation: {
        type: String,
        required: [true, 'Designation is required'],
    },
    facultyType: {
        type: String,
        required: [true, 'facultyType is required'],
        default:"Permanent"
    },

    qualification: {
        type: String,
        required: [true, 'qualification is required'],
    },

    expertise: {
        type: String,
        required: [true, 'expertise number is required'],
    },
    image: {
        type: String,
    },
    // bioData: {
    //     type: String,
    // },

});
module.exports = mongoose.model('Faculty', facultySchema);