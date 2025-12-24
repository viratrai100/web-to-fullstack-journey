const http = require("http");
express = require("express");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Socket io handle
io.on("connection", (socket) => {
//   console.log("A New User connected");
  socket.on('user-message', (message) => {
    // console.log("A new User Message", message);
    io.emit("message", message);  // -> agar kisi bhi user se koi bhi message aata hia to usko baakiyon ko de do.
  });
});

// app.use(express.static("/public/index.html"));
app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  res.sendFile("./public/index.html");
});

server.listen(3000, () => console.log(`Server Started at PORT:3000`));