
const Faculty = require("../modals/Faculty");
const User = require("../modals/user");
const Authenticated = require("../utils/Authicated");
const router=require("express").Router();



router.post("/register",async(req,res,next)=>{
        try{
         const {email,password,userType}=req.body;
         console.log(email,password)
         
         if(userType=="faculty"){
            const isEmail=await Faculty.findOne({email});
            if(!isEmail){
                throw new Error("Email does not exist");
                return
            }
         }


         const createUser=await User.create({
            email,password
         })
         
        res.json({
            sucess:true,
            message:"user created Sucessfully"
        })
        }
        catch(err){
            console.error(err)
        }
})



router.post("/login",async(req,res,next)=>{
    try{
       const {email,password}=req.body;
       console.log(email,password);

       const isuser=await User.findOne({email});
       console.log(isuser)

       if(!isuser){
        throw new Error("user Does not exist")
       }

    const ispassword=await isuser.isPasswordCorrect(password)
    console.log(ispassword)

    if(!ispassword){
        throw new Error("Enter userName or Password is not correct")
    }

    const accesToken=await isuser.generateAccessToken();
    const refreshToken=await isuser.generateRefreshToken();
    // consol
    console.log(accesToken,refreshToken)

    res.cookie("Acesstoken",accesToken,{
        httpOnly:true
    }).cookie("RefeshToken",refreshToken,{
        httpOnly:true
    }).json({
        sucess:true,
        message:"user logined sucessfully"
    })

    }
    catch(err){
        console.error(err)
    }
})


// router.get("/test",Authenticated,(req,res,next)=>{
//     console.log(req.id)
//        res.json({
//         "meassge":"Token"
//        })
// })

module.exports=router