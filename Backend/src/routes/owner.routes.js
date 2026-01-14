const express = require("express");
const router = express.Router();

const isOwnerLoggedIn = require("../middlewares/owner.middleware");
const {registerOwner ,loginOwner,logoutOwner,getOwner} = require("../controllers/ownerController");
const { ownerValidation } = require("../validations/owner.validation");
const { loginValidation } = require("../validations/owner.validation");
const validate = require("../middlewares/validator.middleware");

router.post("/register", validate(ownerValidation), registerOwner );
router.post("/login", validate(loginValidation), loginOwner );
router.post("/logout", isOwnerLoggedIn, logoutOwner );
router.get("/getOwner", isOwnerLoggedIn, getOwner );

module.exports = router;
