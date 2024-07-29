const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello RIIT!");
});
app.get("/about", (req, res) => {
  res.send("Hello About!");
});
app.listen(port, () => {
  console.log(`SLACMS IS RUNNING SERVER ${port}`);
});
