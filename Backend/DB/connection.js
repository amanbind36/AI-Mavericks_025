const mongoose=require("mongoose");

const connection=mongoose.connect("mongodb://localhost:27017/education")
.then((res)=>console.log("mongoconnect"))
.catch((err)=>console.log(err))

module.exports=connection;