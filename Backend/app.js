const express = require("express");
const router = require("./Routes/userRoutes");
const app = express();

app.use(express.json());

app.use("/user", router);

app.listen(3000, () => {
  console.log("Running");
});
