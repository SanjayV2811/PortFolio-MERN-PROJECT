
const User = require("../models/user.model")
const hashPassword = require("../utils/hashedPass")
const comparePassword = require("../utils/comaprePass")


const createUser = async ({name,email,password})=>{
    try {
        
        
        const hashedPassword =  await hashPassword(password)
        const newUser = await User.create({name,email,password:hashedPassword})
        return newUser;
    }   catch (error) {
        console.log(error)
        
    }
}

const login = async ({email,password})=>{
    try {
        if(!email || !password){
            throw new Error("All fields are required")
        }
        const user = await User.findOne({email})
        if(!user){
            throw new Error("User not found")
        }
        const isPasswordMatched =  await comparePassword(password,user)
        if(!isPasswordMatched){
            throw new Error("Incorrect email or password")
        }
        return user;

    } catch (error) {
        console.log(error)
        
    }
}

module.exports = {
    createUser,
    login
}