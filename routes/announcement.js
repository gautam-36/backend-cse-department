const Announcement = require("../modals/Announcement");
const router = require("express").Router();


router.post("/announcement", async (req, res) => {
    try {

        const { title, date, url } = req.body;



        const createAnnouncement = await Announcement.create({
            title, date, url
        })
        console.log(createAnnouncement)

        res.json({
            success: true,
            message: "Announcement created scuessfully"
        })
    }
    catch (err) {
        console.error(err)
    }
})
router.get("/announcement", async (req, res) => {
    try {

        const getAnnouncement = await Announcement.find()
        console.log(getAnnouncement)

        res.status(200).send(getAnnouncement)
    }
    catch (err) {
        console.error(err)
    }
})

// Delete an announcement
router.delete('/announcement/:id', async (req, res) => {
    try {
        await Announcement.findByIdAndDelete(req.params.id);
        res.json({ message: 'Announcement deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});








module.exports = router