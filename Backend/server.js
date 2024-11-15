const express=require("express")
const app=express()
const connection =require("./DB/connection")
const userRouter =require("./route/userRoute")
app.use(express())
app.use("/",userRouter);
app.listen(5000,async()=>{
    console.log("server started")
    await connection
})