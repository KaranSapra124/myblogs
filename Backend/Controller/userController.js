const express = require("express");

module.exports.userSignUp = (req, res) => {
  console.log(req.body);
};

module.exports.getAllBlogs = (req, res) => {
  console.log("Blogs Fetched!");
};
