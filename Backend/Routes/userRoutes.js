const express = require("express");
const userSignUp = require("../Controller/userController");
const router = express.Router();

router.post("/user-sign-up", userSignUp);

module.exports = router;
