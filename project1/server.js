const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

console.log(path.join(__dirname, "public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/pages/index.html"));
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
