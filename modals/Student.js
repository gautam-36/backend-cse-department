const mongoose = require("mongoose");


const StudentSchemma = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    rollno: {
        type: String,
        required: true,
        unique: true
    },
    course: {
        type: String,
        required: true,
    },
    branch: {
        type: String
    }
})

const Student = mongoose.model("Student", StudentSchemma)

module.exports = Student;