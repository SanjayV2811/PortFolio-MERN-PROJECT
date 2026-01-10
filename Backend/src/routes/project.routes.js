const express = require("express");
const router = express.Router();
const upload = require("../config/multer.js");

const {
  getProjectsController,
  getProjectByIdController,
  createProjectController,
  updateProjectController,
  deleteProjectController,
  setFavoriteController,
  removeFavoriteController,
  getFavoriteProjectsController,
  getProjectImageController,
} = require("../controllers/projectController");

const isOwnerLoggedIn = require("../middlewares/owner.middleware");


// ---------- FIXED ORDER ----------

// favorites
router.get("/favorite", getFavoriteProjectsController);
router.post("/favorite/:id", isOwnerLoggedIn, setFavoriteController);
router.post("/unfavorite/:id", removeFavoriteController);

// image
router.get("/image/:id", getProjectImageController);

// CRUD
router.post("/create", isOwnerLoggedIn, upload.single("image"), createProjectController);
router.post("/update/:id", isOwnerLoggedIn, upload.single("image"), updateProjectController);
router.get("/delete/:id", isOwnerLoggedIn, deleteProjectController);

// normal fetch
router.get("/", getProjectsController);
router.get("/:id", getProjectByIdController);

module.exports = router;
