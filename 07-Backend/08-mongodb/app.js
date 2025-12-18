const express = require("express");
const app = express();

const userModel = require("./usermodel");

app.get("/", (req, res)=> {
    res.send("Virat")
});

// app.get("/create", (req, res) => {
//     userModel({
//       name: "virat",
//       // username: "virat",
//       email: "virat@gmail.com",
//       username: "virat",
//       age: 20
//     }); 
//     console.log("Hello")  // pahle ye console wala code chalega ,
//     // phir bad me upar wala code chalega kyunki wo asynchronous hai.
//     // iska solution hai  async, await 
    
// });

// async use :- 
        // mark await , then mark the nearest fuction async , then 

// app.get("/create", async (req, res) => {
//   let createduser = await userModel.create({
//     name: "virat",
//     // username: "virat",
//     email: "virat@gmail.com",
//     username: "virat",
//     age: 20,
//   });

//   res.send(createduser);

// });

// ---------------------creating another user to show 2 user info------------------------------------------------------------
app.get("/create", async (req, res) => {
  let createduser = await userModel.create({
    name: "sahil",
    email: "sahil@gmail.com",
    username: "sahil",
    age: 20,
  });

  res.send(createduser);
});

app.get("/read", async (req, res) => {
  let users = await userModel.find();  // return every user info
//   let users = await userModel.findOne({username: "virat"});  // return only one user info virat
//   let users = await userModel.find({username: "viratrai"});  // no user exist but still return []
  res.send(users);
});

// find   -> return array.
// findOne  -> return Object.

app.get("/update", async (req, res) => {
    // userModel.findOneUpdate(findone, update, {new: true})
    let updateduser = await userModel.findOneAndUpdate({username: "virat"}, {name: "virat rai"}, {new: true})

  res.send(updateduser);
});

// app.get("/delete", async (req, res) => {
//     let users = await userModel.findOneAndDelete({ username: "virat" });
//   res.send(users);
// });


// app.listen(3001);
app.listen(3000);