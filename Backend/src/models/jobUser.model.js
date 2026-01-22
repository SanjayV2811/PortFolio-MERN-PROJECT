const mongoose = require("mongoose");

const jobUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["recruiter", "applicant"],
        default: "applicant"
    }
});

module.exports = mongoose.model("JobUser", jobUserSchema);