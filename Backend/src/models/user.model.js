const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type :String,
        required:true,
        trim:true,
        maxlength:100
    },
    email: {
        type :String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        maxlength:100
    },
    password: {
        type :String,
        required:true,
        minlength:6,
        maxlength:255
    }
})


const User = mongoose.model("User", userSchema);

module.exports = User;