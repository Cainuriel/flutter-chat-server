const express = require("express");
const path = require("path");

require("dotenv").config();
// db conecttion
require("./database/config").dbConnection();

// App de Express
const app = express();
//parseo body
app.use(express.json());

// Path público
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

// rutas
app.use("/api/login", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));

const server = app.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);
  console.log("Servidor corriendo en puerto", process.env.PORT);
});

module.exports.server = server;
