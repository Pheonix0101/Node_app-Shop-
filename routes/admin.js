const express = require("express");
const path = require("path");
const rootdir = require("../util/path");

const router = express.Router();

const products = [];

router.use("/add-product", (req, resp, next) => {
  console.log("middleware running");
  // resp.sendFile(path.join(rootdir, "views", "add-product.html"));
  resp.render("add-product", {     // render alwayse look for views
    pageTitle: "Add product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

router.post("/product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
