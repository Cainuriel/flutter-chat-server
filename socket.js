const { connectionUser } = require("./controllers/socket");
const { checkJWT } = require("./utils/jwt");
const socketIO = require("socket.io");

function addSocket(server) {
  const io = socketIO(server);

  console.log("ejecutando socket");

  // Mensajes de Sockets
  io.on("connection", (client) => {
    console.log("Cliente conectado");

    // console.log(`client.handshake.headers x-token: `, client.handshake.headers['x-token']);
    // const [isValid, uid] = checkJWT(client.handshake.headers["x-token"]);
    // Bearer eXetruh3tgjke54lijeglkehg.5h55-ywh-4h5h5yhh
    const [isValid, uid] = checkJWT(
      client.handshake.headers["socket-authorization"]
    );
    // console.log(`isValid, uid`, isValid, uid);

    if (!isValid) return client.disconnect();

    console.log(`socket autenticó cliente`);
    connectionUser(uid, true);

    // ingreso en sala personal
    client.join(uid);
    
    client.on('personal-message', (payload) => {
      console.log(`payload`, payload);
      io.to(payload.to).emit('personal-message', payload);
    })
    client.on("disconnect", () => {
      console.log("Cliente desconectado");
      // ? el controlador connectionUser si es llamado sin pasar true como segundo argumento tiene por defecto la desconexión
      connectionUser(uid);
    });

    // client.on('mensaje', ( payload ) => {
    //     console.log('Mensaje', payload);

    //     io.emit( 'mensaje', { admin: 'Nuevo mensaje' } );

    // });
  });
}

module.exports.addSocket = addSocket;
