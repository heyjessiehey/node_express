const express = require("express");
const path = require("path");
// const bodyParser = require("body-parser");

const app = express();

const homeRoutes = require("./routes/home");
const userRoutes = require("./routes/users");

app.get("/favicon.ico", (req, res) => res.status(204));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(homeRoutes);
app.use(userRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1> Page not found</h1>");
});

app.listen(3000);
