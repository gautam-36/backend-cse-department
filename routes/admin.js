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
            message: "Admin created scuessfully"
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



router.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);

        const isAdmin = await Admin.findOne({ email });
        //    console.log(isAdmin)

        if (!isAdmin) {
            res.status(301).send("User doesn't exist")
            return;
        }

        const ispassword = await isAdmin.isPasswordCorrect(password)
        // console.log(ispassword)

        if (!ispassword) {
            res.status(301).send("Password is incorrect")
            return;
        }

        const accesToken = await isAdmin.generateAccessToken();
        const refreshToken = await isAdmin.generateRefreshToken();
        // console
        console.log(accesToken, refreshToken)

        res.cookie("Acesstoken", accesToken, {
            httpOnly: true
        }).cookie("RefeshToken", refreshToken, {
            httpOnly: true
        }).json({
            sucess: true,
            message: "Admin logged in sucessfully",
            AcessTOken:accesToken
        })


    }
    catch (err) {
        console.error(err)
    }
})

router.get("/logout",Authenticated,(req,res,next)=>{

    const id=req.id;
    console.log(id);
    const options={
        httpOnly:true
    }
    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json({
        meassage:"Admin logout Sucessfully",
        sucess:true
    })
})



module.exports = router