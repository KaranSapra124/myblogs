// const { message } = require("antd");
const express = require("express");
const userModel = require("../Model/UserModel");
const bcrypt = require("bcrypt");

module.exports.isLoggedIn = async (req, res, next) => {
  console.log(req.cookies.userId, "COOKIE");
  if (req.cookies.userId) {
    req.user = req.cookies.userId;
    next();
  } else {
    const { email, password } = req.body;
    const found = await userModel.findOne({ Email: email });
    const isTrue = await bcrypt.compare(password, found.password);
    if (isTrue) {
      req.user = found._id;
      next();
    } else {
      return res.status(403).send({ message: "Invalid Password" });
    }
  }
};
