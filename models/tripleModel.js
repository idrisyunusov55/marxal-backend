import mongoose from "mongoose";


export const TripleSchema = mongoose.Schema({
    name:{type:String},
    firstPhoto:{type:String},
    secondPhoto:{type:String},
    thirdPhoto:{type:String},
    fourthPhoto:{type:String}
},{timestamps:true})

const TripleItem = mongoose.model("Triple", TripleSchema)

export default TripleItem