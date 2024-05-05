const Events = require("../modals/Events");
const router = require("express").Router();


router.post("/events", async (req, res) => {
    try {

        const { title, date, url, image} = req.body;



        const createEvents = await Events.create({
            title, date, url, image
        })
        console.log(createEvents)

        res.json({
            success: true,
            message: "Events created scuessfully"
        })
    }
    catch (err) {
        console.error(err)
    }
})
router.get("/events", async (req, res) => {
    try {

        const getEvents= await Events.find()
        console.log(getEvents)

        res.status(200).send(getEvents)
    }
    catch (err) {
        console.error(err)
    }
})

// Delete an announcement
router.delete('/events/:id', async (req, res) => {
    try {
        await Events.findByIdAndDelete(req.params.id);
        res.json({ message: 'Events deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});








module.exports = router