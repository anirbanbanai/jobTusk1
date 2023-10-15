const { default: mongoose } = require("mongoose");

// import mongoose from "mongoose";

// const connectMongoDb = async()=>{
//  try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("Connect to MongoDb");
//  } catch (error) {
//     console.log("not connected");
//  }
// }

// export default connectMongoDb;

const connectMongoDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connect MongoDb");
    } catch (error) {
        console.log("not connected");
    }
}

export default connectMongoDb;