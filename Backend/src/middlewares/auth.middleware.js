
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const comparePassword = require("../utils/comaprePass");
const generateToken = require("../utils/generateToken");
const User = require("../models/user.model");
const cookie = require("cookie-parser");


const isloggedin = async (req,res,next) =>{
    try {
        

        const token = req.cookies.token || req.header("Authorization")?.split(" ")[1];
        if(!token){
            return res.status(401).json({message:"Unauthorized"})
        }
        const decode = jwt.verify(token,"portfolio_secret");
        
        const user = await User.findById(decode.id);
        if(!user){
            return res.status(401).json({message:"user not found"})
        }
        req.user = user;
        next();
        
    } catch (error) {
        return res.status(401).json({message:"Unauthorized",error:error.message})   
    }
}

module.exports = isloggedin