const mongoose = require('mongoose');


const AdminSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "please Enter Your Email"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "please Enter Your Email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "please enter the password"]
    },
    userType: {
        type: String,
        default:"Admin"
    }
})


const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;
