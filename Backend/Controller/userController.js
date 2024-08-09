const express = require("express");

module.exports.userSignUp = (req, res) => {
  return res.status(200).send({ message: "You have logged in!" });
};

module.exports.getAllBlogs = (req, res) => {
  console.log("Blogs Fetched!");
};
