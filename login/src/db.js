import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://sofiaospinagomez5:123456So@cluster0.8fmawxd.mongodb.net/practica"); 
        console.log(">> DB Connect");
    } catch (error) {
        console.log(error)
    }
}