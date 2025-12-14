// Express.js
// Introduction to Express.js.
// express.js is a npm package.
// framework 
// Setting up a basic Express application.
// Routing. 
// Middleware.
// Request and response handling.
// Error Handling.



// Library :- Library ek tools ka box jaisa hai — aap chahiye toh screwdriver uthao, chahiye toh hammer, aur apni marzi se kaam karo.
// framework -> Framework ek factory jaisi hai — wahan ka process fixed hota hai, aap apne parts daaloge, baaki machine (framework) decide karegi kaise product banega.



// Setting up a basic Express application.

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Server Is Ready");
// })

// app.listen(3000);




// Routes :- Domain ke baad jo path hota hai (jaise /about, /products, /login) usse route kehte hain.
// Ye route batata hai ki server ko kaunsa page ya data dena hai.


// const express = require("express");
// const app = express();


// app.get("/", (req, res) => {
//   res.send("Server Is Ready");
// })

// app.get("/goal", (req, res) => {
//   res.send("Ready For Greatest Comeback");
// })

// app.listen(3000);




// Middleware :-
// middleware ek aisi function hoti hai jo request (req) aane aur response (res) bhejne ke beech me kaam karti hai.
// Ye request ko modify kar sakti hai, check kar sakti hai, ya extra kaam kar sakti hai (jaise logging, authentication, etc.).

// import express from "express";
// const express = require("express");
// const app = express();


// app.use((req, res, next) => {
//   console.log("Mai Middle Ware Hu");
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("Server Is Ready");
// })

// app.get("/services", (req, res) => {
//   res.send("Ye services wala page hai ");
// });


// app.get("/about", (req, res) => {
//   res.send("Bhai Ye About Page Hai Ye");
// });


// app.get("/goal", (req, res) => {
//   res.send("Ready For Greatest Comeback");
// })

// app.listen(3000);



// Error Handling 



const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Mai Middle Ware Hu");
  next();
});

app.get("/", (req, res) => {
  res.send("Server Is Ready");
});

app.get("/goal", (req, res, next) => {
  // res.send("Ready For Greatest Comeback");
  return next(new Error("Pata Lagao "))
});


app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send("Kuch To Gadbad Hai Daya ?!?")
})

app.listen(3000);



// node script.js