const express = require("express");
const userModel = require("../Model/UserModel");
const bcrypt = require("bcrypt");
// VIKAS123 // ejlrjfjrfkerkfmicnr_eicnrinci!knknkonid@jk#cikenci@

module.exports.userSignUp = async (req, res) => {
  const { password } = req.body;

  // console.log(hashPass);
  const newData = await userModel.create({
    ...req.body,
    password: await bcrypt.hash(password, 5),
    phnNum: +req.body.phnNum,
  });
  return res.status(200).send({ message: "Your Account is created!", newData });
};

module.exports.getAllBlogs = (req, res) => {
  console.log("Blogs Fetched!");
};
