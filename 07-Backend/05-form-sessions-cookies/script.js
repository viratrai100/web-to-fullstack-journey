// session and cookies

// Cookies: Browser me chhota data store hota hai jo user ki preferences ya tracking ke liye use hota hai.
// Session: Server me temporarily data store hota hai jo user ke login ya active state ko track karta hai.

// Cookies ka example:
// Maan lo tum ek café me gaye aur waiter ne tumhe ek chit de di jisme tumhara naam likha hai —

// "Virat Rai – Favorite: Cold Coffee"
// Ye chit tumhare pocket me rehti hai (browser me store hoti hai).
// Agle din tum café me wapas aaye, waiter chit dekh ke turant tumhari pasand ki coffee le aaya.

// Session ka example:
// Ab maan lo, chit tumhare pocket me nahi hai, par waiter ke paas apni diary me tumhara naam aur pasand likha hai (server pe store hota hai).
// Agle din tum aaye, tum bas apna naam batate ho, waiter diary dekh ke tumhari pasand serve kar deta hai.



// 📌 Simple difference:

// Cookies = data tumhare paas (browser) rehta hai.

// Session = data café (server) ke paas rehta hai.

// --------------------------------------------------------------------------------------------------------------------------------------



// express.json() → agar client se JSON format me data aata hai, to usko req.body me JS object bana ke store kar deta hai.

// express.urlencoded({ extended: true }) → agar client HTML form ke through data bhejta hai (URL-encoded format me), to usko parse karke JS object me convert karta hai.


const express = require("express");
const app = express();

app.use(express.json()); // JSON body ko parse karne ke liye (POST/PUT requests me)
app.use(express.urlencoded({ extended: true })); // URL-encoded data ko parse karne ke liye (HTML form se data)

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
// app.listen(3001);