const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/favicon.ico", (req, res) => res.status(204));

app.use("/users", (req, res, next) => {
  console.log("/user middleware");
  res.send("<ul><li>user1</li><li>user2</li></ul>");
});

app.use("/", (req, res, next) => {
  console.log("first middle ware");
  next();
});

app.use((req, res, next) => {
  console.log("Second middleware");
  res.send("<h1>Hello world</h1>");
});

app.listen(3000);
