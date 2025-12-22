const express = require("express");
const app = express()
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/", (req, res)=> { 
    res.send("Hello");
});

app.get("/create", async (req, res) => {
//   res.send("Create Page Hai Ye");
  let user = await userModel.create({
    username: "Virat",
    age: 25,
    email: "virat@gmail.com"

  });

  res.send(user);

});


app.get("/post/create", async (req, res) => {
    // res.send("Working");
    let post = await postModel.create({
      postdata: "Hello JI Kaise ho saree ",
      user: "68a090082b1b7237213881c3"
    });

    let user = await userModel.findOne({ _id: "68a090082b1b7237213881c3" });
    user.posts.push(post._id);
    await user.save();
    res.send({post, user});


    res.send(post);
});

app.listen(3000);