//here i am goinng to writing the code for the connecting the code 
const mongoose=require('mongoose');
const express=require('express');

const DbConnection=async ()=>{
  try{
    mongoose.connect(process.env.MONGO_URL);
    console.log("mongoDb Is Connected Succesfull ..");

  }catch(error){
    console.log("feild to connect the data base");

  }
}
module.exports=DbConnection;