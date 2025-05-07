import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config()

//add your mongo uri PRIVATE KEY in .env
const db = process.env.MONGOBD_URI
// console.log(process.env);

// async connection
export const connectDB = async ()=>{
  try {
    const connect =  await mongoose.connect(db)
    console.log(connect.connection.port);
  } catch (error) {
    console.log(error);
    console.error(error,'connection failed')
  }
}

// promis:
// mongoose.connect(db).then(()=>{
//   console.log('connection to db success');
// }).catch((err)=>{
//   console.log(err);
// });
