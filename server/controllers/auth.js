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

            export const google = async (req, res, next) => {
                const { email, username, image } = req.body;
              
                try {
                  // Check if user already exists
                  let existingUser = await user.findOne({ email: email });
              
                  if (existingUser) {
                    // User exists: generate JWT token, set cookie, and send user data
                    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET || "SECRET");
              
                    res.cookie("token", token, { httpOnly: true });
              
                    // Remove sensitive data (password) from user object before sending
                    const { password, ...rest } = existingUser._doc;
              
                    return res.status(200).json({...rest });
                  } else {
                    // User does not exist: create new user
                    const generatedPassword = bcryptjs.hashSync(Math.random().toString(36).slice(-8), 10);
              
                    const newUser = new user({
                      username:username.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
                      email: email,
                      password: generatedPassword,
                      photo: image,
                    });
              
                    await newUser.save();
              
                    // Generate JWT token, set cookie, and send user data
                    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET || "SECRET");
              
                    res.cookie("token", token, { httpOnly: true });
              
                    // Remove sensitive data (password) from user object before sending
                    const { password: newPassword, ...rest } = newUser._doc;
              
                    return res.status(200).json({ ...rest });
                  }
                } catch (error) {
                  // Handle errors
                  next(error);
                }
              };

    

