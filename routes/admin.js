const Admin = require("../modals/Admin");
// const Authenticated = require("../utils/Authicated");
const Authenticated  = require("../utils/authicated")
const router = require("express").Router();
const crypto = require("crypto");
const bcrypt = require("bcrypt");

router.post("/create-admin", async (req, res, next) => {
    try {

        const {  email, password,userType } = req.body;
            
        if(!email){
            res.status(300).json({
                message:"Enter tour email"
            })
        }
        if(!password){
            res.status(300).json({
                message:"Enter the password"
            })
        }
       

        const createAdmin = await Admin.create({
            email, password, userType
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
            AcessTOken: accesToken
        })


    }
    catch (err) {
        console.error(err)
    }
})

router.get("/logout", Authenticated, (req, res, next) => {

    const id = req.id;
    console.log(id);
    const options = {
        httpOnly: true
    }
    return res
    .status(200)
    .clearCookie("Acesstoken", options)
    .clearCookie("RefeshToken", options)
    .json({
        meassage:"Admin logout Sucessfully",
        sucess:true
    })

})

router.post("/updatePassword",Authenticated,async(req,res,next)=>{
      try{
        console.log(req.body)
        const {oldpassword,newpassword}=req.body;
        console.log(oldpassword,newpassword)
        if(!oldpassword){
        return res.status(300).json({
             message:"Enter the old Password"
         })
         
        }
        if(!newpassword){
        return res.status(300).json({
             message:"Enter the new Password"
         })
         
        }
        const id=req.id;
         console.log(id)
        const user=await Admin.findById(id);
        console.log(user)
        const verifyPassword=user.isPasswordCorrect(oldpassword);
 
        if(!verifyPassword){
         res.status(300).json({
             message:"Enetr the incorrect password"
         })
        }
        user.password=newpassword;
 
        await user.save({validateBeforeSave:false});
 
        res.status(200).json({
         sucess:true,
         message:"Password upadted "
        })
      }
      catch(err){
        return res.status(300).json({
            err
        })
      }

})


// router.post("/forgotPassword",async(req,res,next)=>{
//             try{
//                     const {email}=req.body;
//                     console.log(email)
//                     if(!email){
//                         res.status(300).json({
//                             message:"Enetr the email"
//                         })
//                     } 

//                     const AdminExist=await Admin.findOne({email});
//                     console.log(AdminExist)
//                     if(!AdminExist){
//                         return res.status(300).json({
//                             sucess:false,
//                             messgae:"Admin does not exist"
//                         })
//                     }

//                     let resetToken = crypto.randomBytes(32).toString("hex");
//                     console.log(resetToken)
//                     const hash = await bcrypt.hash(resetToken, 10);
//                     console.log(hash)

//                     const updatedToken=await Admin.findOneAndUpdate({email},{
                        
//                     })


//             }
//             catch(err){

//             }


// })



module.exports = router