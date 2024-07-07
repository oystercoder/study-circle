import user from '../model/user.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
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