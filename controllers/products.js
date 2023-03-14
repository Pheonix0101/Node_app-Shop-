const Product = require("../models/product");

exports.getAddProduct = (req, resp, next) => {
  // render alwayse look for views
  resp.render("add-product", {
    pageTitle: "Add product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "shop",
      path: "/",
      hasproducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
