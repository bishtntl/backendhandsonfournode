const userroute =require("./router/userrouter")
const express=require("express")
// const bodyparser=require("body-parser")
const app= express()
const cors=require("cors")
app.use(express.json()) //we are using here express to read the data to send from by client side



// app.use(bodyparser())  now days we are not using of body parser bcz it is deprecated we have all mathod in express


app.use(cors({
    origin:"*"
}))
app.use("/api",userroute)

app.listen(5000,()=>{
    try{
        console.log("server is running")
    }
    catch(err){
        console.log(err,"error")
    }
})