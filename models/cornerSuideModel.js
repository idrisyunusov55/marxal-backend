import mongoose from "mongoose";


export const CornerSuideSchema = mongoose.Schema({
    name:{type:String},
    firstPhoto:{type:String},
    secondPhoto:{type:String},
    thirdPhoto:{type:String},
    fourthPhoto:{type:String}
},{timestamps:true})

const CornerSuideItem = mongoose.model("CornerSuide", CornerSuideSchema)

export default CornerSuideItem