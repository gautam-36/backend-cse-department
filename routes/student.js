const Student = require("../modals/Student");
const express = require("express")

const router = express.Router();


router.post("/create", async (req, res, next) => {
    const { email, name, rollno, course, branch } = req.body;
    console.log(req.body)
    const createdStudent = await Student.create({ email, name, rollno, course, branch });

    console.log(createdStudent)
    res.status(201).json({
        sucess: true,
        message: "Student added sucessfully"
    })
})

router.get("/studentlist", async (req, res, next) => {
    try {
        console.log(req.query);
        const { studentyear, course, branch } = req.query
        const newDate = new Date();
        const year = newDate.getFullYear();
        const month = newDate.getMonth()
        let session = null;
        console.log(month)
        console.log(year)
        if (month > 6) {
            session = year - studentyear + 1;
        }
        else {
            session = year - studentyear
        }
        session = session - 2000;
        console.log(session)

        const regexExp = new RegExp("^" + session)
        console.log(regexExp)


        let data = await Student.find({ "rollno": { $regex: regexExp } })
        console.log(data)
        data = data.filter((el) => {
            return el?.branch === branch
        })
        console.log(data)
        data = data.filter((el) => {
            console.log(el.course)
            console.log(course)
            return el?.course === course.toString()
        })

        console.log(data)
        return res.status(200).json({
            
            data
        })
    }
    catch (err) {
        console.error(err)
        return res.status(400).json({
            meassage: "Something went wrong"
        })
    }


})


router.put("/update/:id", async (req, res, next) => {
    const { email } = req.body;
    const { id } = req.params;

    const updatedStudent = await Student.findByIdAndUpdate(id, {
        email
    }, {
        new: true
    })

    res.status(200).json({
        sucess: true,
        meassage: "user updated sucessfully"
    })
})

router.delete("/delete/:id", async (req, res, next) => {
    const { id } = req.params;

    await Student.findByIdAndDelete(id);


    res.status(200).json({
        sucess: true,
        message: "Student removed from Record"
    })
})






module.exports = router