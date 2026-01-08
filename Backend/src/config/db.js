const mongoose = require("mongoose");
const dbgr = require("debug")("app:db");

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        dbgr("Connected to MongoDB");
    })
    .catch((err)=>{
        dbgr("Error connecting to MongoDB",err);
    })
}

module.exports = connectDB;