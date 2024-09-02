const express = require("express");
const router = require("./Routes/userRoutes");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

// mongodb+srv://My_Blog:myblog123@cluster0.vcg2k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
mongoose
  .connect(
    "mongodb+srv://My_Blog:myblog123@cluster0.vcg2k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("DATABASE CONNECTED");
  })
  .catch((err) => {
    console.log(err);
  });

// Install library named , 'cors' : command -> npm i cors [CORS ERROR]
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));

app.use(
  cors({
    origin: "http://localhost:5173", //Frontend URL
    credentials: true,
  })
);

app.use(express.json());

app.use("/user", router);

app.listen(3000, () => {
  console.log("Running");
});
