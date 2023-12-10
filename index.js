const { createServer } = require('http');
const express = require("express");
const path = require("path");
const os = require("os");

const PORT = 8002;

const { Server } = require("socket.io");

  const app = express();
  const server = createServer(app);
  const io = new Server(server);

 app.use(express.static(path.resolve("./public")));

app.get("/",(req,res) => {
  return res.sendFile("/public/index.html")
})

  io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(PORT,() => console.log("Server is running on port:",PORT));




