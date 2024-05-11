const Publication = require("../modals/Publication");
const router = require("express").Router();


router.post("/publication", async (req, res) => {
    try {

        const { description,facultyName, date, url} = req.body;



        const createPublications = await Publication.create({
            description,facultyName, date, url
        })
        console.log(createPublications)

        res.json({
            success: true,
            message: "publication created scuessfully"
        })
    }
    catch (err) {
        console.error(err)
    }
})
router.get("/publication", async (req, res) => {
    try {

        const getPublication= await Publication.find()
        console.log(getPublication)

        res.status(200).send(getPublication)
    }
    catch (err) {
        console.error(err)
    }
})

// Delete an announcement
router.delete('/publication/:id', async (req, res) => {
    try {
        await Publication.findByIdAndDelete(req.params.id);
        res.json({ message: 'Publication deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});








module.exports = router