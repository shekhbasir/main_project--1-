// routes/authroutes.js
const express = require("express");
const authroutes = express.Router();

const upload = require("../middleware/multer");
const uploadingimg = require("../controllers/handlingimage");
const updateprofile = require("../controllers/updateprofile");
const isauthmiddle = require("../middleware/isauthmiddleware");

authroutes.post("/upload", isauthmiddle, upload.single("image"), uploadingimg);
authroutes.put("/updateprofile", isauthmiddle, updateprofile);

module.exports = authroutes;
