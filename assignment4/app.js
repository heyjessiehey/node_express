const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("veiws", "views");

app.get("/favicon.ico", (req, res) => res.status(204));
app.use(express.urlencoded({ extended: false }));

const users = [];

app.get("/", (req, res, next) => {
  res.render("index");
});

app.use("/users", (req, res, next) => {
  console.log(users);
  res.render("users", { users: users });
});

app.post("/add-user", (req, res, next) => {
  users.push(req.body.name);
  res.redirect("/users");
});

app.listen(3000);
