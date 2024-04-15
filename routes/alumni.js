const Alumni = require('../modals/Alumni')
const router = require('express').Router();

// Create a new alumni
router.post('/alumni', async (req, res) => {
    const { name,email, batchYear, classs, stream, company, position, roll, image } = req.body;

    const alumni = new Alumni({
        name,
        email,
        batchYear,
        classs,
        stream,
        company,
        position,
        roll,
        image,
    });

    try {
        const newAlumni = await alumni.save();
        // console.log(newAlumni.image)
        res.status(201).json(newAlumni);

    } catch (err) {
        const errors = Object.values(err.errors).map(el => el.message);
        res.status(400).json({ errors });
    }
});


// DELETE a alumni
router.delete('/alumni/:id', async (req, res) => {
    try {
        const deletedAlumni = await Alumni.findByIdAndDelete(req.params.id);
        if (!deletedAlumni) {
            return res.status(404).json({ message: 'Faculty not found' });
        }
        res.status(200).json({ message: 'Faculty deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});


// Get All alumni 
router.get('/alumni', async (req, res) => {
    try {
        const getAlumni = await Alumni.find();
        res.status(200).json(getAlumni)
    } catch (error) {
        const errors = Object.values(error.errors).map(el => el.message);
        res.status(400).json({ errors });
    }
});


// getting a particular alumni and updating the details is still pending in task

module.exports = router
