const express = require("express");
const WebSocket = require("ws");

const app = express();
const port = 3000;

const server = app.listen(port, () => {
  console.log(`Server is listening on the port ${port}`);
});

const wss = new WebSocket.Server({ server });

wss.on("connection", ws => {
  console.log("New client connected");

  const messageInterval = setInterval(() => {
    ws.send("sendCounterValue");
  }, 1000);

  ws.on("message", message => {
    const data = JSON.parse(message.toString());
    console.log("Received counter value:", data.count);
  });

  ws.on("close", () => {
    clearInterval(messageInterval);
    console.log("Client disconnected");
  });
});
