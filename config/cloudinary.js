//here i am going to set up the code for the clodinary 
import { v2 as cloudinary } from 'cloudinary';

const hamarcloudinary=async(filepath)=>{

  //otherwie i am going to return from here only ...
  cloudinary.config({ 
        cloud_name:process.env.HAMAR_CLOUD_NAME, 
        api_key:process.env.CLOUD_KEY , 
        api_secret: process.env.CLOUD_SECRET 
    });
  try{

    if(!filepath){
      return null;
    }
    //remainig kaam i am going to writen here for my task 
    const uploadResult = await cloudinary.uploader.upload(filepath)
    fs.unlinkSync(filepath);
    return uploadResult.secure_url;
      
  }catch(error){

  }
}
// module.exports=hamarcloudinary;
export default hamarcloudinary;