import user from '../model/user.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken'
export const signup=async(req,res,next)=>{
    const {username,email,password}=req.body;
    if(!username||!email||!password||username===""||email===""||password==="")
        {
           next(errorHandler(400,"All the fields are required"))
        }
       const newUser=new user({username,email,password});
       const hashedpassword=bcryptjs.hashSync(password,10);
       newUser.password=hashedpassword
       try{

       await newUser.save()
      
       res.status(200).json({message:"user created successfully"})
       }catch(err)
       {
        next(err);
       }

   
 


}
export const signin=async(req,res,next)=>{
    const {email,password}=req.body;
    if(!email||!password||email===""||password==="")
    {
        next(errorHandler(400,"All the fields are required"))
    }
    try
    {
        const userii=await user.findOne({email:email})
        if(!userii)
        {
            return next(errorHandler(400,"user not found"))
        }
        const isMatch=bcryptjs.compareSync(password,userii.password)
        if(!isMatch)
            {
                return next(errorHandler(400,"password is incorrect"))
            }
            const {password:pass,...rest}=userii._doc;
      
        const token=jwt.sign(
            {id:userii._id},
            process.env.JWT_SECRET||"SECRET",
        )
           res.cookie("token",token,{httpOnly:true})
           res.status(200).json({message:"user signed in successfully",user:rest})

        }catch(err)
                {
                    next(err)
                }
            }

    

