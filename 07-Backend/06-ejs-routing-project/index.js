// Setting up parsers for form 

// setting up ejs for ejs pages 
    // install ejs from npm 
    //          npm install ejs 
    // setup ejs as a for view engine 
    //          app.set('view engine', 'ejs');  // Express ko bataya ki EJS use hoga

// setting up public static files 
// console.log(__dirname)  // -> C:\Users\virat\Desktop\Backend\06-ejs-routing-project
// console.log(__dirname+ 'public')  // -> C:\Users\virat\Desktop\Backend\06-ejs-routing-projectpublic


// const path = require('path');
// console.log(path.join(__dirname, 'public'));  // C:\Users\virat\Desktop\Backend\06-ejs-routing-project\public


// dynamic routing 
    //   dynamic routing
    //   how to get data coming from frontend at backend



// const express = require("express");
// const app = express();
// const path = require('path');

// // parsers
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
// app.set('view engine', 'ejs');  // Express ko bataya ki EJS use hoga

// app.get("/", (req,res) => {
// //   res.send("Sahi Chal Raha Hai");
//   res.render("index");  // index.ejs nahi likhte hain ejs ke case me sirf
// //   res.render("home", { name: "Virat" }); // home.ejs me name pass hoga
// });

// app.listen(3003, ()=> {
//     console.log("Ha bhai thik hi hai sb");
// })

// --------------------------------------------------------------------------------------------------------------------------------------


const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');  // Express ko bataya ki EJS use hoga


app.get("/", (req, res)=> {
    // res.send("Get Request Ka Home Page")
    res.render("index");   // again ejs ke case me .ejs likhna mandotary nahi hai
})

// app.get("/profile/virat", (req,res)=> {
//     res.send("Profile Wala Page Hai Ye To");
// });


app.get("/profile/:username", (req, res) => {
    // req.params.username 
//   res.send("Profile Wala Page Hai Ye To");
//   res.send(req.params.username); // -> print username on browser
  res.send(`Hello, ${req.params.username}`); // -> print Hello , username on browser
});


app.get("/author/:username/:age", (req, res) => {
    // res.send("Ye author wala page hai")
    // res.send(req.params);
    res.send(`Hello, ${req.params.username} your age is:-  ${req.params.age}`)
});


app.listen(3003, () => {
  console.log("Ha bhai thik hi hai sb");
});



