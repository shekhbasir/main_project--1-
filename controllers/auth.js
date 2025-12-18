//here we are going to wrirtin the code for the signup
const express=require('express');
const bcrypt=require('bcryptjs');
const Userdatabase=require('../models/User');
const tokengen=require('../config/token');



const Hamarsignup=async (req,res)=>{
  try{
    const {firstname,lastname,username,email,password}=req.body;

    const emailbaa=await Userdatabase.findOne({email});

    if(emailbaa){
      return  res.status(400).json({message:"Email Already Exist ..!"})
    }

    const usernamebaa=await Userdatabase.findOne({username});
    if(usernamebaa){
      return  res.status(400).json({message:"UserName Already Exist ..!"})

    }


    if(password.length<8){
      return  res.status(400).json({message:"Password at Least 8 character..!"})
    }

    const hashpassword=await bcrypt.hash(password,10);

    const newdata=await Userdatabase.create({
      firstname,
      lastname,
      username,
      email,
      password:hashpassword
    })

    const token=await tokengen(newdata._id);

    //here i am going to use the cookieparser and 

    res.cookie("token",token,{
      httpOnly:true,
      secure:false,
      sameSite:"strict",
      maxAge:24*60*60*1000,

    })

    return res.status(200).json({message:"You signup Successfully ...",newdata});

  }catch(error){

    return res.status(500).json({message:"error from Signup...!",error});

  }
}



const Hamarlogin=async(req,res)=>{
  try {
    const {email,password}=req.body;

    const emailbaa=await Userdatabase.findOne({email});
    if(!emailbaa){
      return  res.status(400).json({message:"Email Not Found ..!"});
    }


    const ispassswordmatch=await bcrypt.compare(password,emailbaa.password);
    if(!ispassswordmatch){
      return res.status(400).json({message:"PassWord not Match..!"});
    }

     const token=await tokengen(emailbaa._id);

    //here i am going to use the cookieparser and 

    res.cookie("token",token,{
      httpOnly:true,
      secure:false,
      sameSite:"strict",
      maxAge:24*60*60*1000,

    })

    return res.status(200).json({message:"You Login Succesfully..!",emailbaa});



  } catch (error) {
    return res.status(500).json({message:"Error From Login!",error});

  }
}

const Hamarlogout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "strict",
      secure: false // production me true
    });

    return res.status(200).json({
      message: "You Logout Successfully"
    });

  } catch (error) {
    return res.status(500).json({
      message: "Failed to logout"
    });
  }
};

module.exports={Hamarsignup,Hamarlogin,Hamarlogout}

//at the time of the login  i am going to work with this item 
