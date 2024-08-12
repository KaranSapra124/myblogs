const express = require("express");
const mongoose = require("mongoose");
const userModel = require("../Model/UserModel");

module.exports.userSignUp = async (req, res) => {
  console.log(req.body);
  const newData = await userModel.create({
    ...req.body,
    phnNum: +req.body.phnNum,
  });
  return res.status(200).send({ message: "You have logged in!", newData });
};

module.exports.getAllBlogs = (req, res) => {
  console.log("Blogs Fetched!");
};
