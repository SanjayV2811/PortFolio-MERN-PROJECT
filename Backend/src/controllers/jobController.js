const express = require("express");
const router = express.Router();
const jobModel = require("../models/job.model");
const jobUserModel = require("../models/jobUser.model");
const generateToken = require("../utils/generateToken");


module.exports = {
    getJobs: async (req, res) => {
        try {
            const jobs = await jobModel.find();
            res.status(200).json(jobs);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    createJob: async (req, res) => {
        try {
            const job = await jobModel.create(req.body);
            res.status(201).json(job);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    createUser: async (req, res) => {
        try {
            const user = await jobUserModel.create(req.body); 
            const token = generateToken(user._id);
            res.cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            });
            res.status(201).json({ user, token });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    loginUser: async (req, res) => {
        try {
            const user = await jobUserModel.findOne({ email: req.body.email });
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            if (user.password !== req.body.password) {
                return res.status(401).json({ message: "Invalid password" });
            }
            const token = generateToken(user._id);
            res.cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            });
            res.status(200).json({ user, token });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};