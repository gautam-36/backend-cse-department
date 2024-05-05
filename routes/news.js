const News = require("../modals/News");
const router = require("express").Router();


router.post("/news", async (req, res) => {
    try {

        const { title, date, url } = req.body;



        const createNews = await News.create({
            title, date, url
        })
        console.log(createNews)

        res.json({
            success: true,
            message: "news created scuessfully"
        })
    }
    catch (err) {
        console.error(err)
    }
})
router.get("/news", async (req, res) => {
    try {

        const getNews = await News.find()
        console.log(getNews)

        res.status(200).send(getNews)
    }
    catch (err) {
        console.error(err)
    }
})

// Delete a news
router.delete('/news/:id', async (req, res) => {
    try {
        await News.findByIdAndDelete(req.params.id);
        res.json({ message: 'News deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router