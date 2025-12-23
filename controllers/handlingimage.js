//const here i am going to wrting the code for the image handling 

const hamarcloudinary=require('../config/cloudinary');

const uploadingimg=async(req,res)=>{

try {
  
  if(!req.file){
    return  res.status(400).json({message:"no file Uploaded ..!"})
  }
  const  ImgURL=await hamarcloudinary(req.file.path)

  if(!ImgURL){
    return res.status(400).json({message:"Cloudinary Upload Feiled..!"})
  }


  return res.status(200).json({message:"file Uploaded",ImgURL});
} catch (error) {
  console.error("Upload controller error:", error);
    res.status(500).json({ message: "Server error" });
}
}

module.exports=uploadingimg;