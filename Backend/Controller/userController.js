const express = require("express");
const userModel = require("../Model/UserModel");
const bcrypt = require("bcrypt");
const blogsModel = require("../Model/BlogModel");
// VIKAS123 // ejlrjfjrfkerkfmicnr_eicnrinci!knknkonid@jk#cikenci@

module.exports.userSignUp = async (req, res) => {
  const { password } = req.body;
  console.log(password);
  // console.log(hashPass);
  const newData = await userModel.create({
    ...req.body,
    password: await bcrypt.hash(password, 5),
    phnNum: +req.body.phnNum,
  });
  return res.status(200).send({ message: "Your Account is created!", newData });
};

module.exports.userLogIn = async (req, res) => {
  return res
    .status(200)
    .send({ message: "Logged In Successfully!", userId: req.user });
};

// Blogs
// Create a blog
module.exports.createBlog = async (req, res) => {
  await blogsModel.create(req.body);
  return res.status(201).send({ message: "Blog Created Successfully!" });
};
module.exports.getAllBlogs = (req, res) => {
  console.log("Blogs Fetched!");
};
