const express = require("express");
const userSignUp = require("../Controller/userController");
const { isLoggedIn } = require("../Middleware/userAuth");
const router = express.Router();

router.post("/user-sign-up", userSignUp.userSignUp);
router.post("/user-log-in", isLoggedIn, userSignUp.userLogIn);

// Routes
router.post("/user-create-blog", userSignUp.createBlog);
router.get("/all-blogs", isLoggedIn, userSignUp.getAllBlogs);

module.exports = router;
