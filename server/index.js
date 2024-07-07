import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoute from './routes/User_route.js'
import auth from './routes/auth.js'
dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to db')
}).catch(()=>{
    console.log('not connected to db')
})
const app=express();
app.use(express.json())
app.listen(3023,()=>{
    console.log('server is running')
})
app.use('/api/user',userRoute)
app.use('/api/auth',auth)


app.use((err,req,res,next)=>
{
    const statusCode=err.statusCode||500
    const message=err.message||"internal server error"
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
       

    })
})

