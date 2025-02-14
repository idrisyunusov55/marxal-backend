import mongoose from "mongoose";


export const BigVillaSchema = mongoose.Schema({
    name:{type:String},
    firstPhoto:{type:String},
    secondPhoto:{type:String},
    thirdPhoto:{type:String},
    fourthPhoto:{type:String}
},{timestamps:true})

const BigVillaItem = mongoose.model("BigVilla", BigVillaSchema)

export default BigVillaItem