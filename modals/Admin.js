const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const AdminSchema = new mongoose.Schema({
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
        default: "Admin"
    }
})
// added some routes

AdminSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

AdminSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

AdminSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

AdminSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}




const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;