const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const statusRoute = require("./routes/statusRoute");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");

app.use(cors());
app.use(express.json());

// if specified route
app.use("/api/status/", statusRoute);
app.use("/api/user/", userRoute);
app.use("/api/auth/", authRoute);

app.use(express.static("./client/dist"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

// if unknown route
app.use((req, res) => {
  res.send("<h1>404 not found</h1>");
});

module.exports = app;
