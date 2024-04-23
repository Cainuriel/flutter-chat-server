const mongoose = require("mongoose");


const dbConnection = async () => {
  try {

   await mongoose.connect(process.env.DBCNN);
   console.log(`db Online`);
    
  } catch (error) {
    console.log(`error en dbConnection`, error);
    throw new Error("Error al crear el objeto de conexión con la bd");
  }
}


module.exports = {
    dbConnection
}