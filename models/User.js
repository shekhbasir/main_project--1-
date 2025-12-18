//here i am goig to making the userschema and the mongodb 
const mongoose=require('mongoose');
const express=require('express');

const HamarUser=new mongoose.Schema({
  firstname:{
    type:String,
    required:true
  },
  lastname:{
    type:String,
    required:true
  },
  username:{
    type:String,
    required:true,

  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  profileimg:{
    type:String,
    default:""
  },
  backimg:{type:String,default:""},
  heading:{
    type:String,
  },
  skill:[{type:String}],

  education:[{
    collage:{
      type:String,
    },
    degree:{
      type:String
    },
    feildofstudy:{
      type:String
    }
  }],

  location:{
    type:String,
  },
  gender:{
    type:String,
    enum:["male","female","other"],
  },
  //and also expreince k v batt aa jaii

  experience:{
    title:{type:String},
    componey:{type:String},
    description:{type:String}
  },
  //now and very importaint connection

  connection:[
    {type:mongoose.Schema.Types.ObjectId,
    
    }
  ]
},{timestamps:true});


const Userdatabase=mongoose.model('Userdatabase',HamarUser);
module.exports=Userdatabase;


//here  i am going to working all the best and the new signup,logina and 