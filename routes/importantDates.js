const ImportantDates = require("../modals/ImportantDates");
const router = require("express").Router();


router.post("/dates", async (req, res) => {
    try {

        const { description, date, url } = req.body;



        const createImportantDates = await ImportantDates.create({
            description, date, url
        })
        console.log(createImportantDates)

        res.json({
            success: true,
            message: "ImportantDates created scuessfully"
        })
    }
    catch (err) {
        console.error(err)
    }
})
router.get("/dates", async (req, res) => {
    try {

        const getImportantDates = await ImportantDates.find()
        console.log(getImportantDates)

        res.status(200).send(getImportantDates)
    }
    catch (err) {
        console.error(err)
    }
})

// Delete an announcement
router.delete('dates/:id', async (req, res) => {
    try {
        await ImportantDates.findByIdAndDelete(req.params.id);
        res.json({ message: 'important dates deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});








module.exports = router