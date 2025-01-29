const express = require("express");
const app = express();

app.get("/api/data", (req, res) => {
  res.json({ message: "Data from Vercel!" });
});

module.exports = app;
