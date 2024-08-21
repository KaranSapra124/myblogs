const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    default: null,
  },
  img: {
    type: String,
    default: null,
  },
  author: {
    //VIkas -> Login -> req.user = id ->
    type: mongoose.Schema.Types.ObjectId,
    ref: "userModel",
  },
  description: {
    type: String,
    defult: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("blogModel", blogSchema);
