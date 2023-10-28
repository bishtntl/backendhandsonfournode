const { register, login,Home } = require("../constroller/usercontroller")
const auth =require("../middleware/auth")
const userroute=require("express").Router()

userroute.post("/login",login)
userroute.post("/register",register)
userroute.get('/',auth,Home)


module.exports=userroute
