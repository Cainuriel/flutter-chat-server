require("dotenv").config();

// conexión a la base de datos global
require("./database/config").dbConnection();

const { app } = require("./server");
const { addSocket } = require("./socket");

const server = require("http").createServer(app);
addSocket(server);

server.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);
  console.log("Servidor corriendo en puerto", process.env.PORT);
});
