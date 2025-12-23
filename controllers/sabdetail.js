//here i am going to finsd this concept simply 

const express=require('express');
const Userdatabase=require('../models/User');
const sabdetail=async(req,res)=>{
  try{
    const saradata=req.user.userId;

    const hamardata=await Userdatabase.findById(saradata).select("-password");
  
    
    return res.status(200).json({hamardata})

m
  }catch(error){
    return res.status(500).json({message:"error from the sabdetail "})
  }

}
module.exports=sabdetail;

//abb maa sabai data frontend maa print garaunaa sakinxuu 
//now i am going to see the all data in the screen by the help of the usecontext api 