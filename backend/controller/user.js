const express = require("express");
const path = require("path");
const User = require("../model/user.js");
const { upload } = require("../multer.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const router = express.Router();
const catchAsyncError = require("../middleware/CatchAsyncError.js");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail.js");
const sendToken = require("../utils/jwtToken.js");

router.post("/create-user", upload.single("file"), async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const userEmail = await User.findOne({ email });

    if (userEmail) {
      const filename = req.file.filename;
      const filePath = `uploads/${filename}`;
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Error deleting file" });
        }
      });
      return next(new ErrorHandler("User already exists", 400));
    }

    const filename = req.file.filename;
    const fileUrl = path.join(filename);

    const user = {
      name: name,
      email: email,
      password: password,
      avatar: fileUrl,
    };

    const activationToken = createActivationToken(user); 

    const activationUrl = `http://localhost:3000/activation/${activationToken}`;
    try {
      await sendMail({
        email: user.email,
        subject: "Activate your account!",
        message: `hello ${user.name}, please click on link to activate your account: ${activationUrl}`,
      });

      res.status(201).json({
        success: true,
        message: `please Check Your Email:- ${user.email} to Activate your account`,
      });
    } catch (error) {
      return next(error.message, 500);
    }
  } catch (err) {
    return next(err.message, 400);
  }
});

//create activation token
const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_SECRET, {
    expiresIn: "5m",
  });
};

//activate user
router.post(
  "/activation",
  catchAsyncError(async (req, res, next) => {
    try {
      const { activation_token, avatar } = req.body;
      const newUser = jwt.verify(
        activation_token,
        process.env.ACTIVATION_SECRET
      );

      if (!newUser) {
        return next(new ErrorHandler("invalid token", 400));
      }
      const { name, email, password } = newUser;

      const user = await User.findOne({ email });
      if (user) {
        return next(new ErrorHandler("User already exists", 400));
      }

      user = await User.create({
        name,
        email,
        avatar,
        password,
      });
      sendToken(user, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

module.exports = router;
