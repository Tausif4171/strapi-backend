module.exports = () => {
  const WebSocket = require("ws");
  const wsServer = new WebSocket.Server({ port: 1338 });

  wsServer.on("connection", (ws) => {
    ws.on("message", (message) => {
      ws.send(message); // Echo the received message back to the client
    });
  });

  console.log("WebSocket server running on ws://localhost:1338");
};
