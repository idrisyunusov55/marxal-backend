import mongoose from "mongoose";


export const TwinBalconySchema = mongoose.Schema({
    name:{type:String},
    firstPhoto:{type:String},
    secondPhoto:{type:String},
    thirdPhoto:{type:String},
    fourthPhoto:{type:String}
},{timestamps:true})

const TwinBalconyItem = mongoose.model("TwinBalcony", TwinBalconySchema)

export default TwinBalconyItem