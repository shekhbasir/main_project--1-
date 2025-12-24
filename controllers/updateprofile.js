// controllers/updateprofile.js
const Userdatabase=require("../models/User");
const updateprofile = async (req, res) => {
  try {
    const userId = req.user.id; // isauthmiddleware se

    const updated = await Userdatabase.findByIdAndUpdate(
      userId,
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        heading: req.body.heading,
        location: req.body.location,
        gender: req.body.gender,
        profileimg: req.body.profileimg,
        backimg: req.body.backimg,
      },
      { new: true }
    ).select("-password");

    res.status(200).json({
      success: true,
      hamardata: updated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Profile update failed" });
  }
};

module.exports = updateprofile;
