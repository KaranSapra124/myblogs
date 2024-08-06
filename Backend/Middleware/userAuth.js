// const { message } = require("antd");
const express = require("express");

module.exports.isLoggedIn = (req, res, next) => {
  const isUserLoggedIn = true;

  isUserLoggedIn ? next() : res.status(403).send({ message: "Log In First" });
};
