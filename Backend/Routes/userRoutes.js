const express = require("express");
const userSignUp = require("../Controller/userController");
const { isLoggedIn } = require("../Middleware/userAuth");
const upload = require("../Middleware/multerConfig");
const router = express.Router();

router.post("/user-sign-up", userSignUp.userSignUp);
router.post("/user-log-in", isLoggedIn, userSignUp.userLogIn);

// Routes
router.post(
  "/user-create-blog",
  upload.single("blogImg"),
  userSignUp.createBlog
);
router.get("/all-blogs", isLoggedIn, userSignUp.getAllBlogs);

module.exports = router;
