const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const uploadCloudinary = async (filepath) => {
  const result = await cloudinary.uploader.upload(filepath, {
    folder: "profile",
  });
  return result.secure_url;
};

module.exports = uploadCloudinary;
