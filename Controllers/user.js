import {User} from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//register controller
export const register=async(req,res)=>{
    const {name,email,password}=req.body;
    if(name=="" || email=="" || password=="") return res.json({
        message:"Please fill all the fields"});
    let user=await User.findOne({email});
    if(user){
        return res.json({
            message:"User already exists", 
            success:false,
        });
    }
    const hashpassword=await bcrypt.hash(password,10);
    user=await User.create({email,name,password:hashpassword});
    
   res.json({
         message:"User registered successfully",
         success:true,
         user
   });

};
//login controller
export const login=async(req,res)=>{
    const {email,password}=req.body;
    if(email=="" || password==""){
        return res.json({
            message:"Please fill all the fields",
            success:false,
        });
    }
        let user=await User.findOne({email});
        if(!user){
            return res.json({
                message:"User does not exist",
                success:false,
            })
        }
        const validPassword=await bcrypt.compare(password,user.password);
        if(!validPassword){
            return res.json({
                message:"Invalid password",
                success:false
                })
        }
        const token=jwt.sign({user:user},process.env.JWT,{expiresIn:"1d"});
        res.json({message:`welcome ${user.name} you successfully logged in`,token,success:true});

    
}
    
