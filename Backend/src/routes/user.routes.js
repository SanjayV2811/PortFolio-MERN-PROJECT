
const express = require("express");
const router = express.Router();
const {registerUser} = require("../controllers/authController")
const {loginUser , profile , logout} = require("../controllers/authController")
const validatorMiddleware = require("../middlewares/validator.middleware")
const {userValidation,loginValidation} = require("../validations/user.validation");
const isloggedIn = require("../middlewares/auth.middleware");



router.post("/register",validatorMiddleware(userValidation),registerUser);
router.post("/login",validatorMiddleware(loginValidation),loginUser);
router.get("/profile",isloggedIn,profile);
router.get("/logout",isloggedIn,logout);

module.exports = router;