const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

// Serve built assets (JS, CSS, images) from dist
app.use(express.static(path.join(__dirname, "dist")));

// Fallback: any other route (e.g. client-side routes) also gets index.html
app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
