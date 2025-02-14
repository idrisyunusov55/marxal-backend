import mongoose from "mongoose";


export const StandartKingSchema = mongoose.Schema({
    firstPhoto:{type:String},
    secondPhoto:{type:String},
    thirdPhoto:{type:String},
    fourthPhoto:{type:String}
},{timestamps:true})

const StandartKingItem = mongoose.model("standartKing", StandartKingSchema)

export default StandartKingItem