
const jwt = require("jsonwebtoken");

const generateToken = (user)=>{
    try {
        const token = jwt.sign({id:user._id , email:user.email},process.env.JWT_SECRET,{
            expiresIn:"1d"
        })
        return token
    } catch (error) {
        console.log(error)
    }
}

module.exports = generateToken