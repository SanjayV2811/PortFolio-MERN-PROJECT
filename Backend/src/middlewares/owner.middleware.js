const jwt = require("jsonwebtoken");
const Owner = require("../models/owner.model");

const isOwnerLoggedIn = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.header("Authorization")?.split(" ")[1];
        if(!token){
            return res.status(401).json({message:"Unauthorized"})
        }
        const decode = jwt.verify(token,"portfolio_secret");
        
        const owner = await Owner.findById(decode.id);
        if(!owner){
            return res.status(401).json({message:"owner not found"})
        }
        req.owner = owner;
        next();
        
    } catch (error) {
        return res.status(401).json({message:"Unauthorized",error:error.message})   
    }
}
module.exports = isOwnerLoggedIn;