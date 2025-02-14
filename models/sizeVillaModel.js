import mongoose from "mongoose";


export const SizeVillaSchema = mongoose.Schema({
    name:{type:String},
    firstPhoto:{type:String},
    secondPhoto:{type:String},
    thirdPhoto:{type:String},
    fourthPhoto:{type:String}
},{timestamps:true})

const SizeVillaItem = mongoose.model("SizeVilla", SizeVillaSchema)

export default SizeVillaItem