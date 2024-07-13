import mongoose from 'mongoose'
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true


    },
    password:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        default:"https://imgs.search.brave.com/5M5t4xJRUK3Ag87I1N_gH6rPAasbG-7X6ZtEwr1P3zw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/LzdlL0NpcmNsZS1p/Y29ucy1wcm9maWxl/LnN2Zw"
    }
},{timestamps:true}
)
const user=mongoose.model('User',userSchema)
export default user