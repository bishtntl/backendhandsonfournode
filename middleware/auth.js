
const jwt=require("jsonwebtoken")
const secret_key="bisht"
const auth=((req,res,next)=>{
   const BearerToken= req.header("authorization")
   console.log(BearerToken)
   if(BearerToken){
    const token=BearerToken.split(" ")[1];

    const validate=jwt.verify(token,secret_key)

    if(validate){
      return  next()
    }
return res.send({
    msg:"not authorized"
})
   }
   
   
   return res.send({
    msg:"user not allowed"
})

})

module.exports=auth