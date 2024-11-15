const express=require("express")
const userRouter=express.Router();

const {postuser,loginUser,updateUser,deleteUser}=require("../controller/authController");

userRouter.post("/register",postuser);
userRouter.post("/login",loginUser);
userRouter.patch("/:id",updateUser)
userRouter.delete("/:id",deleteUser)
module.exports=userRouter;
