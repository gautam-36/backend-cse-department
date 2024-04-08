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



// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// Database connection
mongoose.connect(process.env.MONGO_URL, {
}).then(() => {
    console.log("dataBase is Connected")
}).catch((err) => { console.log(err) })


// Routes
app.use('/api', uploadRoutes);
app.use('/api', alumniRoutes);
app.use('/api', facultyRoutes);






// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
