const express = require("express");
const router = express.Router();
const ownerModel = require("../models/admin.model");
const { createOwner, getOwner } = require("../services/owner.service");
const hashPassword = require("../utils/hashedPass");
const generateToken = require("../utils/generateToken");
const comparePassword = require("../utils/comaprePass");

module.exports = {
    registerOwner: async (req, res)  => {
        try {
          
            const owners = await ownerModel.find();
            if(owners.length > 0){
                return res.status(400).json({ message: "Owner already exists" });
            }
            const { name, email, password } = req.body;
            if (!name || !email || !password) {
                return res.status(400).json({ message: "All fields are required" });
            }
            const existingOwner = await ownerModel.findOne({ email });
            if (existingOwner) {
                return res.status(400).json({ message: "Owner already exists" });
            }
            const hashedPassword = await hashPassword(password);
            const owner = await createOwner({ name, email, password: hashedPassword });
            const token = generateToken(owner._id);
            res.cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            });
            res.status(200).json({ message: "Owner created successfully", owner, token });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    },
    loginOwner: async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ message: "All fields are required" });
            }
            const owner = await ownerModel.findOne({ email });
            if (!owner) {
                return res.status(400).json({ message: "Owner not found" });
            }
              
            const isPasswordValid = await comparePassword(password, owner);
            if (!isPasswordValid) {
                return res.status(400).json({ message: "Invalid password" });
            }
            const token = generateToken(owner._id);
            res.cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            });
            res.status(200).json({ message: "Owner logged in successfully", owner, token });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    },
    logoutOwner: async (req, res) => {
        try {
            res.clearCookie("token");
            res.status(200).json({ message: "Owner logged out successfully" });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    },
    getOwner: async (req, res) => {
        try {
            const owner = await getOwner(req.ownerId);
            res.status(200).json({ message: "Owner fetched successfully", owner });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
}
