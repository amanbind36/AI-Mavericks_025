const usermodel=require("../model/userModel");
const jwt = require('jsonwebtoken');

const generateToken = (usermodel) => {
    return jwt.sign({ id: usermodel._id, role: usermodel.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  };
const postuser=async(req,res)=>{
    try{
        const {name,email,password,role}=req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user= await usermodel.create({name,email,password:hashedPassword,role});
        return res.status(201).json({message:"user register successfully"})

    }catch(err){
        return res.status(500).json({error:err.message})
    }
}
const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await usermodel.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      res.status(200).json({ token: generateToken(user) });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const updateUser = async (req, res) => {
    
    try {
      const user = await usermodel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!user) return res.status(404).json({ error: "User not found" });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
   const deleteUser = async (req, res) => {
    
    try {
      const user = await usermodel.findByIdAndDelete(req.params.id);
      if (!user) return res.status(404).json({ error: "User not found" });
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports={postuser,loginUser,updateUser,deleteUser}