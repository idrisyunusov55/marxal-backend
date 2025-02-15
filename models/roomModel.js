import mongoose from "mongoose";

export const RoomsSchema = mongoose.Schema({
    name:{type:String},
    firstPhoto:{type:String},
    secondPhoto:{type:String},
    thirdPhoto:{type:String},
    fourthPhoto:{type:String},
    maxPeople:{type:Number},
    totalroom:{type:Number},
    sahe:{type:String},
    otaqSayi:{type:Number},
    price:{type:Number},
    roominformation:{type:String}
}, {timestamps:true})

const RoomItem = mongoose.model("room", RoomsSchema)
export default RoomItem