import jwt from 'jsonwebtoken'
import { errorHandler } from "./error.js"


export const verifyUser=(req,res,next)=>{
    const token=req.cookies.token
    if(!token)
    {
        return next(errorHandler(401),"unauthorized")
    }
    try{
        const decoded=jwt.verify(token,process.env.SECRET_KEY)
        req.user=decoded
        next()
    }
    catch(err)
    {
        return next(errorHandler(404),"error occured");

    }




    }