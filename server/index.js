const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const databaseConnection = require("./database/database.js");
const {
  saveMessage,
  getHistoryMsgByRoom,
} = require("./services/messageService.js");
require("dotenv").config();

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, { cors: process.env.CORS_OPT });

(connectionRoom = () => {
  io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (data) => {
      socket.join(data);
      console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });

    socket.on("get_history", async (data) => {
      const messages = await getHistoryMsgByRoom(data);
      io.emit("get_history", messages);
    });

    socket.on("send_message", async (data) => {
      await saveMessage(data);
    });

    socket.on("disconnect", () => {
      console.log("User Disconnected", socket.id);
    });
  });
})();

(runServer = () => {
  server.listen(process.env.PORT, () => {
    console.log(`Server's running on port ${process.env.PORT}`);
    databaseConnection(); // Connect to DB
  });
})();
