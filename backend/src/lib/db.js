import mongoose from "mongoose";
import { mongo_url } from "./config.js";

export const connectDB = async()=>{
    try {
        await mongoose.connect(mongo_url)
        console.log('Data base connected success.')
    } catch (error) {
        console.log(error)
    }
}