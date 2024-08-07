const express = require("express");
const userSignUp = require("../Controller/userController");
const { isLoggedIn } = require("../Middleware/userAuth");
const router = express.Router();

router.post("/user-sign-up", userSignUp.userSignUp);
router.get("/all-blogs", isLoggedIn, userSignUp.getAllBlogs);

module.exports = router;
