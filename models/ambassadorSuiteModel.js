import mongoose from "mongoose";


export const AmbassadorSchema = mongoose.Schema({
    name:{type:String},
    firstPhoto:{type:String},
    secondPhoto:{type:String},
    thirdPhoto:{type:String},
    fourthPhoto:{type:String}
},{timestamps:true})

const AmbassadorItem = mongoose.model("AmbassadorSuite", AmbassadorSchema)

export default AmbassadorItem