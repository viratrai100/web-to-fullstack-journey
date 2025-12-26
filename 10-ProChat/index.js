const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// static file public folder ke liye
app.use(express.static(path.resolve("./public")));

// socket.io ka main listener (jab koi client connect hota hai)
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("user-message", (data) => {  // data -> username, avtar, text 

    const time = new Date().toISOString();
    const message = {
      username: data.username || "Anonymous",
      avatar: data.avatar || null,
      text: data.text, // actual chat message
      socketId: socket.id,
      time,
    };

    // message ko sab clients tak pahuchana
    io.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));