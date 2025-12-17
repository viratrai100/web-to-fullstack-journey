// npm init -y
// npm init -y chalane se ek package.json file ban jati hai default settings ke sath, aur tumse koi question nahi poochta.

// npm install express.js
// npm i -g nodemon 
// npx nodemon index.js 
// npm install ejs

const express = require("express");
const app = express();
const path = require("path");
// const fs = require("node:fs");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res)=> {
    // res.send("Welcome");
    fs.readdir(`./files`, function(err, files) {
        // console.log(files);
        // res.render("index"); //-> jb fs read ho jaye uske baad hi render kara do isko
        res.render("index",{files: files});
    })
    // res.render("index");
});

app.get("/file/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`,"utf-8", function (err, filedata) {
    // console.log(filedata);
    res.render("show", {filename: req.params.filename, filedata: filedata})
  });
});

app.get("/edit/:filename", (req, res) => {
    res.render("edit", {filename: req.params.filename});
  });

app.post("/edit", (req, res) => {
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, function(err) {
        res.redirect("/");
    })
    // console.log(req.body);
  });



app.post("/create", function(req, res) {
    // console.log(req.body);
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
        res.redirect("/")
    })
});

app.listen(3000);
