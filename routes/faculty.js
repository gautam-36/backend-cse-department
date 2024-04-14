const Faculty = require('../modals/Faculty')
const router = require('express').Router();

// create a new faculty
router.post('/faculty', async (req, res) => {
    const { name, email, phone, joinYear, confrence, teaching, research, national, international, designation, qualification, expertise, image, bioData } = req.body;
    const faculty = new Faculty({ name, email, phone, joinYear, confrence, teaching, research, national, international, designation, qualification, expertise, image, bioData });
    try {
        const newFaculty = await faculty.save();
        res.status(201).json(newFaculty)
    }
    catch (err) {
        res.status(500).json(err);
    }
})


// DELETE a faculty member
router.delete('/faculty/:id', async (req, res) => {
    try {
        const deletedFaculty = await Faculty.findByIdAndDelete(req.params.id);
        if (!deletedFaculty) {
            return res.status(404).json({ message: 'Faculty not found' });
        }
        res.status(200).json({ message: 'Faculty deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});





// Get All faculty 
router.get('/faculty', async (req, res) => {
    try {
        const getFaculty = await Faculty.find();
        res.status(200).json(getFaculty)
    } catch (error) {
        const errors = Object.values(error.errors).map(el => el.message);
        res.status(400).json({ errors });
    }
});



module.exports = router 