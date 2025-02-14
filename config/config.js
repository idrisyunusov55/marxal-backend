import mongoose from "mongoose";


export const connectDb = async(req, res) => {
    const connect = await mongoose.connect(process.env.MONGO_URL)
    console.log(connect.connection.host);
    
}