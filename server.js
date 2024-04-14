// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const uploadRoutes = require('./routes/uploadRoutes');
const alumniRoutes = require('./routes/alumni');
const facultyRoutes = require('./routes/faculty');
<<<<<<< HEAD
const Authroute = require('./routes/auth');
=======
const Authroute=require('./routes/Auth');
>>>>>>> 3750b58f9b4b6fddecb8880613d16740f15211bd
const cookieParser = require('cookie-parser');


// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000', // Specify the origin(s) you want to allow
<<<<<<< HEAD
    methods: ['GET', 'POST'], // Specify which methods are allowed
    //   allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
    credentials: true
=======
  methods: ['GET', 'POST'], // Specify which methods are allowed
//   allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
  credentials: true 
>>>>>>> 3750b58f9b4b6fddecb8880613d16740f15211bd
}));
app.use(cookieParser());


// Database connection
mongoose.connect(process.env.MONGO_URL, {
}).then(() => {
    console.log("dataBase is Connected")
}).catch((err) => { console.log(err) })


// Routes
app.use('/api', uploadRoutes);
app.use('/api', alumniRoutes);
app.use('/api', facultyRoutes);
<<<<<<< HEAD
app.use('/api', Authroute);
=======
app.use('/api',Authroute);
>>>>>>> 3750b58f9b4b6fddecb8880613d16740f15211bd






// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});