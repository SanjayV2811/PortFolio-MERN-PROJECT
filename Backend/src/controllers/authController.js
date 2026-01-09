const { createUser, login } = require("../services/user.service");
const generateToken = require("../utils/generateToken");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

// module.exports.registerUer = async (req,res)=>{
//     try {
//         const {name,email,password} = req.body
//         const user = await createUser({name,email,password})
//         if(!user){
//             return res.status(400).json({message:"User not created"})
//         }
//         const token = generateToken(user._id)
//         res.status(200).json({message:"User created successfully",user,token})

//     } catch (error) {

//     }
// };

module.exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = await createUser({ name, email, password });
    if (!newUser) {
      return res.status(400).json({ message: "User not created" });
    }
    const token = generateToken(newUser);
    // res.cookie("token", token, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    // });

    res
      .status(200)
      .json({ message: "User created successfully", user: newUser, token });
  } catch (error) {
    console.log(error);
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await login({ email, password });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const token = generateToken(user);
    // res.cookie("token", token, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    // });

    res
      .status(200)
      .json({ message: "User logged in successfully", user, token });
  } catch (error) {
    console.log(error);
  }
};

module.exports.profile = async (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({ message: "User profile", user });
  } catch (error) {
    console.log(error);
  }
};

module.exports.logout = async (req, res) => {
  try {
    // res.clearCookie("token", {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: process.env.NODE_ENV === "production" ? "none" : "Lax",
    // });
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.log(error);
  }
};
