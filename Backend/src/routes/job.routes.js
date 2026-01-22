const express = require("express");
const router = express.Router();
const { getJobs, createJob ,createUser, loginUser} = require("../controllers/jobController");
const isloggedin = require("../middlewares/job.middleware");


router.get("/", getJobs);
router.post("/createJob", isloggedin, createJob);
router.post("/createJobUser",createUser);
router.post("/loginJobUser",loginUser);

module.exports = router;
