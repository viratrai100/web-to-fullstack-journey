const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");


if (process.env.NODE_ENV === "development") {
// if (process.env.NODE_ENV === "development") {
  router.post("/create", async function (req, res) {
    // res.send("Working Properly");
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res
        .status(503)
        .send("You  don't have permission to crete a new owner.");
    }

    let { fullname, email, password } = req.body;

    let createdOwner = await ownerModel.create({
      fullname,
      email,
      password,
    });

    // res.status(201).json(createdOwner); // yahi JSON print karega Postman me
    res.status(201).send(createdOwner); // yahi JSON print karega Postman me

    // res.send("We can create a new owner");
    // res.status(201).send(createdOwner);
  });
}

router.get("/", function (req, res) {
  res.send("Working Properly");
});



// console.log(process.env.NODE_ENV);
// $env: NODE_ENV = "development"
// $env: NODE_ENV = "production";

// if(process.env === "development") {
//     console.log("Hello Developer");
// }

module.exports = router;
