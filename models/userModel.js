import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name:{type:String, required:true, unique:true},
    surname:{type:String, required:true, unique:true},
    username:{type:String, required:true, unique:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    isAdmin:{type:Boolean, default:false}
}, {timestamps:true})



export default mongoose.model("User", UserSchema)