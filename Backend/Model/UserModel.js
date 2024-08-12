const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    default: null,
  },
  Email: {
    type: String,
    default: null,
  },
  password: {
    type: String,
    default: null,
  },
  phnNum: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("userModel", userSchema);
