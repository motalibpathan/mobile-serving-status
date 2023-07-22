const express = require("express");
const app = express();
const cors = require("cors");
const statusRoute = require("./routes/statusRoute");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// if specified route
app.use("/api/status/", statusRoute);
app.use("/api/user/", userRoute);
app.use("/api/auth/", authRoute);

app.use(express.static("./client/dist"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

module.exports = app;
