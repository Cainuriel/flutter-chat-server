const mongoose = require("mongoose");


const dbConnection = async () => {
  try {

    console.log(" ... conectando base de datos ... ");
    
  } catch (error) {
    console.log(`error en dbConnection`, error);
    throw new Error("Error al crear el objeto de conexión con la bd");
  }
}


module.exports = {
    dbConnection
}