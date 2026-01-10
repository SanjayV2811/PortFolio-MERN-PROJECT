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

router.get("/", isOwnerLoggedIn, getProjectsController);
router.get("/:id", isOwnerLoggedIn, getProjectByIdController);
router.post("/create", isOwnerLoggedIn, upload.single("image"), createProjectController);
router.post("/update/:id", isOwnerLoggedIn, upload.single("image"), updateProjectController);
router.get("/delete/:id", isOwnerLoggedIn, deleteProjectController);
router.post("/favorite/:id", isOwnerLoggedIn, setFavoriteController);
router.post("/unfavorite/:id", removeFavoriteController);
router.get("/favorite", getFavoriteProjectsController);
router.get("/image/:id", getProjectImageController);


module.exports = router;