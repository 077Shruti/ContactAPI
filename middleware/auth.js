import jwt from "jsonwebtoken";
import { User } from "../Models/User.js";
export const authenticated=async(req,res,next)=>{
    const token=req.header("Auth");
    console.log(token);
    if(!token){
        return res.json({message:"No token found",success:false});
    }

    const decode=jwt.verify(token,process.env.JWT);
    //console.log(decode);
    
    const id=decode.user._id;
    //console.log(id);
    let user=await User.findById(id);
    if(!user){
        return res.json({message:"Token is not valid",success:false});
    }
    req.user=user;
    console.log(token);
    console.log(decode);
    next();


}
