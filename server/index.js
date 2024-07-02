import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoute from './routes/User_route.js'
dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to db')
}).catch(()=>{
    console.log('not connected to db')
})
const app=express();
app.listen(3023,()=>{
    console.log('server is running')
})
app.use('/api/user',userRoute)


