const express = require("express");
const router = require("./Routes/userRoutes");
const app = express();
const cors = require("cors");

// Install library named , 'cors' : command -> npm i cors [CORS ERROR]
app.use(
  cors({
    origin: "http://localhost:5173",  //Frontend URL
    credentials: true,
  })
);

app.use(express.json());

app.use("/user", router);

app.listen(3000, () => {
  console.log("Running");
});
