require("dotenv").config();

// conexión a la base de datos global
require("./database/config").dbConnection();

const { server } = require("./server");
const { socket } = require("./socket");

socket(server);
