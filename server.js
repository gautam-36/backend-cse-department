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
const Authroute = require('./routes/auth');
const Adminroute = require('./routes/admin');
const cookieParser = require('cookie-parser');


// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: ['https://cse-gjust.netlify.app/', 'http://localhost:3001', 'http://localhost:3000','https://cse-admin-gjust.netlify.app/'], // Specify the origin(s) you want to allow

    methods: ['GET', 'POST'], // Specify which methods are allowed
    //   allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
    credentials: true
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
app.use('/api/user', Authroute);  
app.use('/api/admin', Adminroute);  




// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});