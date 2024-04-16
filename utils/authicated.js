const jwt=require("jsonwebtoken")

const Authenticated=async(req,res,next)=>{
     const Token=req.cookies.Acesstoken
     console.log(Token);

     if(!Token){
        throw new Error("Token Does not exist");
     }

      const data=await jwt.verify(Token,process.env.ACCESS_TOKEN_SECRET)
      console.log(data)
      req.id=data._id;
      next()
}

module.exports=Authenticated