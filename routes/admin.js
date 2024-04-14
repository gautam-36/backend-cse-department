const Admin = require("../modals/Admin");
const Authenticated = require("../utils/Authicated");
const router = require("express").Router();

router.post("/create-admin", async (req, res, next) => {
    try {
        const { username, email, password,userType } = req.body;
        //  console.log(email,password,userType)

        // if (userType == "faculty") {
           
           
        // }
        const createAdmin = await Admin.create({
           username, email, password, userType
        })
        console.log(createAdmin)

        res.json({
            success: true,
            message: "user created Sucessfully"
        })
    }
    catch (err) {
        console.error(err)
    }
})
router.get("/view-admin", async (req, res, next) => {
    try {
       
        const getAdmin = await Admin.find()
        console.log(getAdmin)

        res.status(200).send(getAdmin)
    }
    catch (err) {
        console.error(err)
    }
})



// router.post("/login", async (req, res, next) => {
//     try {
//         const { email, password } = req.body;
//         console.log(email, password);

//         const isuser = await User.findOne({ email });
//         //    console.log(isuser)

//         if (!isuser) {
//             res.status(301).send("User doesn't exist")
//             return;
//         }

//         const ispassword = await isuser.isPasswordCorrect(password)
//         // console.log(ispassword)

//         if (!ispassword) {
//             res.status(301).send("Password is incorrect")
//             return;
//         }

//         const accesToken = await isuser.generateAccessToken();
//         const refreshToken = await isuser.generateRefreshToken();
//         // console
//         console.log(accesToken, refreshToken)

//         res.cookie("Acesstoken", accesToken, {
//             httpOnly: true
//         }).cookie("RefeshToken", refreshToken, {
//             httpOnly: true
//         }).json({
//             sucess: true,
//             message: "user logged in sucessfully"
//         })


//     }
//     catch (err) {
//         console.error(err)
//     }
// })



module.exports = router