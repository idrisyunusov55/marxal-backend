import mongoose from "mongoose";


export const KingBalconySchema = mongoose.Schema({
    firstPhoto:{type:String},
    secondPhoto:{type:String},
    thirdPhoto:{type:String},
    fourthPhoto:{type:String}
},{timestamps:true})

const KingBalconyItem = mongoose.model("kingBalcony", KingBalconySchema)

export default KingBalconyItem