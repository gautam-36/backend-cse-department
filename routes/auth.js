const Alumni = require("../modals/Alumni");
const Faculty = require("../modals/Faculty");
const User = require("../modals/User");
const Authenticated = require("../utils/Authicated");
const router=require("express").Router();

router.post("/register",async(req,res,next)=>{
        try{
         const {email,password,userType}=req.body;
        //  console.log(email,password,userType)
         
         if(userType=="faculty"){
            const isEmail=await Faculty.findOne({email});
            if(!isEmail){
                res.status(301).send("Email is not registered")
                return
            }
         }
         if(userType=="alumni"){
             const isEmail = await Alumni.findOne({ email });
             if (!isEmail) {
                 res.status(301).send("Email is not registered")
                 return
             }
         }
         const createUser=await User.create({
            email,password,userType
         })
         
        res.json({
            success:true,
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
       //    console.log(isuser)

       if(!isuser){
           res.status(301).send("User doesn't exist")
           return;
       }
           
           const ispassword=await isuser.isPasswordCorrect(password)
           // console.log(ispassword)
           
           if(!ispassword){
               res.status(301).send("Password is incorrect")
               return;
            }
            
            const accesToken=await isuser.generateAccessToken();
            const refreshToken=await isuser.generateRefreshToken();
            // console
            console.log(accesToken,refreshToken)
            
            res.cookie("Acesstoken",accesToken,{
                httpOnly:true
            }).cookie("RefeshToken",refreshToken,{
                httpOnly:true
            }).json({
                sucess:true,
                message:"user logged in sucessfully"
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