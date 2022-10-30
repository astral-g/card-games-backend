require('dotenv').config();

const express = require("express");
const app = express();
const logs = require("./components/logger");


app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
})
  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, logs.logger("info", `Server started on port ${PORT}`));