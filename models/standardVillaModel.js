import mongoose from "mongoose";


export const StandartVillaSchema = mongoose.Schema({
    name:{type:String},
    firstPhoto:{type:String},
    secondPhoto:{type:String},
    thirdPhoto:{type:String},
    fourthPhoto:{type:String}
},{timestamps:true})

const StandartVillaItem = mongoose.model("StandartVilla", StandartVillaSchema)

export default StandartVillaItem