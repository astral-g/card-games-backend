const { Server } = require("socket.io");
const io = new Server(server);

// Open Socket
io.on('newConnection', (socket) => {
  console.log("a user initialised a new socket")
});

// Close Socket
io.on('closeConnection', (socket) => {
  console.log("socket terminated")
});

// Connect to Socket
io.on('connectToSess', (socket) => {
  console.log("a user connected to an existing socket")
});