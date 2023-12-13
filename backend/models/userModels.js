import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        confirmated:{
            type:Boolean,
            default:false
        },   
        token:{
            type:String
        },
    },
    {
        timestamps:true
    }
)

export default userSchema;