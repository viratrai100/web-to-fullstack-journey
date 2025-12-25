const express = require("express");
const app = express();
const http = require("http");
const path = require("path");

const socketio = require("socket.io");

const server = http.createServer(app);

const io = socketio(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


io.on("connection", function (socket) {
  socket.on("send-location", function (data) {
    io.emit("receive-location", {
      id: socket.id,
      ...data,
    });
  });
    console.log("Connected");
  //   console.log(error);
  socket.on("disconnect", function () {
    io.emit("user-disconnect", socket.id);
  });
});


app.get("/", (req, res) => {
  // res.send("Server Ready");
  res.render("index");
});

// server.listen(3000);

const PORT = process.env.PORT || 9000;
server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
