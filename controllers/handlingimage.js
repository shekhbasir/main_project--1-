// controllers/handlingimage.js
const hamarcloudinary = require("../config/cloudinary");

const uploadingimg = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const ImgURL = await hamarcloudinary(req.file.path);

    if (!ImgURL) {
      return res.status(400).json({ message: "Cloudinary upload failed" });
    }

    res.status(200).json({
      success: true,
      image: ImgURL,
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = uploadingimg;
