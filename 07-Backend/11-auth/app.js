const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const path = require("path");
const userModel = require("./models/user");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");  // for login

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
    // res.send("Server Ready");
    res.render("index");
});

// app.post("/create", async (req, res) => {
app.post("/create",  (req, res) => {   // shifting async to nearest await 
    let {username, email, password, age} = req.body;

    bcrypt.genSalt(10, (err, salt) => {
        // console.log(salt);
        bcrypt.hash(password, salt, async (err, hash) => {
            // console.log(hash);
            let createdUser = await userModel.create({
        username,
        email,
        password: hash,
        age
    });

    // jwt.sign();
    let token = jwt.sign({email}, "vrrrrrrrrrrrrrr");
    res.cookie("token", token);
    res.send(createdUser);

    // res.send(createdUser);
        })
    })

    
});


app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
    let user = await userModel.findOne({email: req.body.email});
    if(!user) return res.send("something went wrong");  // to ofused malicious

    // console.log(user.password);
    // console.log(user.password, req.body.password);

    bcrypt.compare(req.body.password, user.password, function (err, result) {
        // console.log(result);
        if(result) {
            let token = jwt.sign({ email: user.email }, "vrrrrrrrrrrrrrr");
            res.cookie("token", token);
            res.send("yes you can login");

        } // else res.send("no you can't login")
        else res.send("something went wrong");  // to confuse 
    })
});

app.get("/logout", (req, res) => {
    res.cookie("token", "");
    res.redirect("/");
});

app.listen(3000);


// xyz;
// $2b$10$biOkmlWQo1curBg5XilyRObtguDzGW0SJizmKEOKRi7FSji10jqka 