const {Schema,model}=require("mongoose");
const userSchema=new Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    role:{type:String,enum:["admin","student","doner"],default:"student"}
})

const usermodel= model(user,userSchema);
module.exports=usermodel;