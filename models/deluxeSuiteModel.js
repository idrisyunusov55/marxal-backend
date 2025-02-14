import mongoose from "mongoose";


export const DeluxeSuideSchema = mongoose.Schema({
    name:{type:String},
    firstPhoto:{type:String},
    secondPhoto:{type:String},
    thirdPhoto:{type:String},
    fourthPhoto:{type:String}
},{timestamps:true})

const DeluxeSuideItem = mongoose.model("DeluxeSuide", DeluxeSuideSchema)

export default DeluxeSuideItem