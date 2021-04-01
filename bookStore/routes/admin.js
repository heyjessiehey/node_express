const express = require("express");
const path = require("path");

const router = express.Router();

const productsController = require("../controllers/products");

const products = [];

router.get("/add-product", productsController.getAddProduct);

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

module.exports = router;
// exports.routes = router;
// exports.products = products;
