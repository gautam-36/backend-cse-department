const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer.middleware');
const cloudinary = require('../utils/cloudinary');
const fs = require('fs')
const path = require('path')

// POST endpoint for image upload
router.post('/upload', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const result = await cloudinary.uploader.upload(req.file.path);
        // Return the URL of the uploaded image
        res.json({ imageUrl: result.secure_url });
        // console.log(result.secure_url)

        fs.unlinkSync(req.file.path)
    } catch (error) {
        console.error('Error uploading image:', error);
        fs.unlinkSync(req.file.path)
        res.status(500).json({ error: 'Image upload failed' });

    }
});

module.exports = router;
