// ------------------------------------Cookie Set -----------------------------------------------------------------------------------
// const cookieParser = require("cookie-parser");
// const express = require("express");
// const app = express();

// app.use(cookieParser());

// app.get("/", (req, res) => {
//     res.cookie("name", "viratrai");
//     res.send("Server Ready");
// });

// app.get("/read", (req, res) => {
//     console.log(req.cookies);
//   res.send("Aap Read Wale Page Pe Aa Chuke Ho");
// });

// app.listen(3000);

// ---------------------------------bcrypt-----------------------------------------------------------------------------------------------------
// ---------------------------------Encrypt------------------------------------------------------------------------------------------------

// const express = require("express");
// const app = express();
// const bcrypt = require("bcrypt");

// const saltRounds = 10;
// const myPlaintextPassword = "virat123";

// app.get("/", (req, res) => {
//   bcrypt.genSalt(saltRounds, function (err, salt) {
//     if (err) return res.send("Error generating salt");

//     bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
//       if (err) return res.send("Error hashing password");

//       console.log(hash);
//       res.send(`Hashed Password: ${hash}`);
//     });
//   });
// });

// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });
















// const express = require("express");
// const app = express();
// const bcrypt = require("bcrypt");


// bcrypt.genSalt(saltRounds, function (err, salt) {
//   bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
//     // Store hash in your password DB.


// app.get("/", (req, res) => {
// bcrypt.genSalt(10, function (err, salt) {
//   bcrypt.hash("virrrrrrrrrrrrrrrrrr", salt, function (err, hash) {
//     console.log(hash);
//     // Store hash in your password DB.
//   });
// });
// });



// app.listen(3000);




// ---------------------------------bcrypt.compare-----------------------------------------------------------------------------------------


// const express = require("express");
// const app = express();
// const bcrypt = require("bcrypt");


// // bcrypt.compare(myPlaintextPassword, hash, function (err, result) {});

// app.get("/", (req, res) => {
//     bcrypt.compare("virrrrrrrrrrrrrrrrrr", "$2b$10$8WdB.IkCi991cFgfhtXyWu.vIygEkrNHOh3eVKNIPs9rCc1Re3Idu", function (err, result) {
//         console.log(result);
//     });
// })

// app.listen(3000);



// ---------------------------------jwtt------------------------------------------------------------------------------------------------



const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

// set token and show it on server terminal
app.get("/", (req, res) => {
  const token = jwt.sign({ email: "viratrai@gmail.com" }, "secret", {
    expiresIn: "1h",
  });

  // set cookie (httpOnly so client JS cannot read it; change if you want readable by client)
  res.cookie("token", token, {
    httpOnly: true, // true is recommended for auth tokens
    sameSite: "lax", // adjust if you need cross-site
    // secure: true,    // enable in production with HTTPS
    maxAge: 3600000, // 1 hour
  });

  console.log("Issued token:", token); // THIS will appear in VS Code terminal (server log)
  res.send("Cookie Set");
});

// read cookie value on server and return to browser
app.get("/read", (req, res) => {
  console.log("/read - raw cookies:", req.cookies); // server terminal
  res.json({ cookie: req.cookies.token || null });
});

// verify JWT and return decoded payload (with try/catch)
app.get("/pass", (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    console.log("No token found in cookies");
    return res.status(401).send("No token in cookies");
  }

  try {
    const data = jwt.verify(token, "secret");
    console.log("Verified payload:", data); // server terminal
    return res.json({ verified: true, payload: data });
  } catch (err) {
    console.log("JWT verify error:", err.message);
    return res.status(401).json({ verified: false, error: err.message });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));














// const express = require("express");
// const app = express();
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const cookieParser = require("cookie-parser");


// app.use(cookieParser());


// app.get("/", (req, res)=> {
//     let token = jwt.sign({email: "viratrai@gmail.com"}, "secret");
//     res.cookie("token", token);
//     res.send("Cookie Set"); 
//     // res.send("Server")

// });

// app.get("/read", (req,res) => {
//     res.send(req.cookies.token);
//     console.log(req.cookies.token);
// });

// app.get("/pass", (req, res) => {
//   let data = jwt.verify(req.cookies.token, "secret");
//   res.send(data)
//   console.log(req.cookies.token);
// });

// // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
// //   .eyJlbWFpbCI6InZpcmF0cmFpQGdtYWlsLmNvbSIsImlhdCI6MTc1NTI5Mzk2NX0
// //   .FA61k7INbGkq8eTLNrU - wOQ2ZoBswf2vEullRo1J5f8;
// app.listen(3000);
