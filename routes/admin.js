const express = require("express");
// const path = require("path");

const productsController = require('../controllers/products');

const router = express.Router();


router.use("/add-product", productsController.getAddProduct);

router.post("/product", productsController.postAddProduct);

module.exports = router;
