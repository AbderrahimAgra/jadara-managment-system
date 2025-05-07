import express from "express";
import nodemon from "nodemon";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db/" 

const app = express();
dotenv.config()

//@TODO: add your port PRIVATE KEY in .env
const port = process.env.PORT

//add your mongo uri PRIVATE KEY in .env
const db = process.env.MONGOBD_URI


app.get('/',(req,res)=>{
  res.send('hello Ikram!')
});
app.get('/user',(req,res)=>{
  res.send('hello Ikram!')
});


app.listen(port,()=>{
  connectDB();
  console.log(`app listinig port ${port}`);
});