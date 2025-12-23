const express = require("express");
const router = express.Router();
const isLoggedin = require("../middlewares/isLoggedin");
const productModel = require("../models/product-model");

// router.get("/", (req, res) => {
//     res.render("index"); 
// });

// router.get("/", function(req, res) {
//     let error = req.flash("error");
//     // res.send("index", {error});
//     // res.render("index", {error});
//     res.send("index");
//
//  });

// router.get("/shop", isLoggedin, function(req, res) {
//     res.render("shop");
// });


// router.get("/shop", async (req, res) => {
//   let products = await productModel.find(); // database se products lana
//   res.render("shop", { products: products }); // yaha products pass karo
// });


// Home Page
router.get("/", (req, res) => {
  res.render("index", { error: [] });
});

router.get("/admin", (req, res) => {
  res.render("admin");
});

// Cart Page
router.get("/cart", (req, res) => {
  res.render("cart");
});

// Create Product Page
router.get("/createproducts", (req, res) => {
  res.render("createproducts", { success: [] });
});

// Owner Login Page
router.get("/owner-login", (req, res) => {
  res.render("owner-login");
});

// Shop Page with products from DB
router.get("/shop", async (req, res) => {
  try {
    let products = await productModel.find();
    res.render("shop", { products: products });
  } catch (err) {
    res.send(err.message);
  }
});



// router.get("/logout", isLoggedin, function (req, res) {
//   res.render("shop");
// });

router.get("/logout", function (req, res) {
  res.cookie("token", "");
  res.redirect("/");
});

module.exports = router;