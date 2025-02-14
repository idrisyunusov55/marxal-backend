import mongoose from "mongoose";


export const CoupleVillaSchema = mongoose.Schema({
    name:{type:String},
    firstPhoto:{type:String},
    secondPhoto:{type:String},
    thirdPhoto:{type:String},
    fourthPhoto:{type:String}
},{timestamps:true})

const CoupleVillaItem = mongoose.model("CoupleVilla", CoupleVillaSchema)

export default CoupleVillaItem