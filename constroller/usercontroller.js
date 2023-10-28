const array=[]
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
// const jwt=require('jsonwebtoken')  //import jwt token
const secret_key="bisht"


// const register=((req,res)=>{
// const registerdata=req.body;
// const details=array.find((item)=>{
//     if(item.email==registerdata.email){
//         return item
//     }
// })
// if(details){
//     return res.send({
//         msg:"user is already register this mail"
//     })
// }
// // const saltround=bcrypt.genSaltSync
// const hashpassword=bcrypt.hashSync(registerdata.password,10)

// const tempobj={
//     email:registerdata.email,
//     password:hashpassword
// }
// array.push(tempobj)

// const jwtToken=jwt.sign({useremail:registerdata.email,},secret_key,{expiresIn:"360000"})
// res.send({array, token:jwtToken})
// })


// const login=((req,res)=>{
//     const logindata=req.body;
//     const logindatils=array.find((item)=>{
//        if(item.email==logindata.email) {
//         return item
//        }
//     })
//     if(logindatils){
//       const validate=  bcrypt.compareSync(logindata.password,logindatils.password)
//       if(validate){
//         const token=jwt.sign({useremail:logindata.email},secret_key,{expiresIn:"360000"})
//         return res.send({msg:"user is logged in successfully",token:token})
//       }
//       else{
//         return res.send({msg:"user password is wrong"})
//       }

//     }


//     else{
//         return res.send({
//             msg:""
//         })
//     }
    
//     array.push(logindata)
  

// })


// module.exports={login,register}


const register=((req,res)=>{
    const data=req.body;
   

    const details=array.find((item)=>{
        if(item.email===data.email){
            return item
        }
    })


    if(details){
        return res.send({msg:"user is alredy create account of this mail"})
    }

    // const saltround=bcrypt.genSaltSync(10)
    // console.log(saltround)

    const hashpassword=bcrypt.hashSync(data.password,10)
    console.log(hashpassword)


 const tempobj={
    email:data.email,
    password:hashpassword

 }


    array.push(tempobj)

    const token=jwt.sign({email:data.email},secret_key ,{expiresIn:"4 d"}) 
//    res.send(array)
res.send({
    msg:"user register",
    token:token
})


})





const login =((req,res)=>{

   const data= req.body;

   const logindetails=array.find((item)=>{
   if(item.email===data.email){
    return item
   }
 
   })
   if(logindetails){
    const validate= bcrypt.compareSync(data.password,logindetails.password)

    if(validate){
        const token =jwt.sign({email:data.email},secret_key,{expiresIn:"4 d"})  
        return  res.send({msg:"user is logged in successfully",token:token
        })
       }
       else{
        return res.send({
            msg:"user password is wrong"
        })
       }
    // if(logindetails.password===loginData.password){
       
        // res.send({
        //     msg:"user is logged in successfully"
        // })
    // }

    // else{
    //     res.send({
    //         msg:"password is incorrect"
    //     })
    // }
   }
  
//    else{
//     res.send({
//         msg:"email is wrong"
//     })
//    }
//    console.log(loginData)
    
})


const Home=((req,res)=>{
    res.send("this is home page")
})

module.exports={login,register,Home}