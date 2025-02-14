import mongoose from "mongoose";


export const RoyalSchema = mongoose.Schema({
    name:{type:String},
    firstPhoto:{type:String},
    secondPhoto:{type:String},
    thirdPhoto:{type:String},
    fourthPhoto:{type:String}
},{timestamps:true})

const RoyalItem = mongoose.model("RoyalSuite", RoyalSchema)

export default RoyalItem