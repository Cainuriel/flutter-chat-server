const { connectionUser } = require('../controllers/socket');
const { io } = require('../index');
const { checkJWT } = require('../middlewares/jwt');


// Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado');

    // console.log(`client.handshake.headers x-token: `, client.handshake.headers['x-token']);
    const [isValid, uid] = checkJWT(client.handshake.headers['x-token']);
    // console.log(`isValid, uid`, isValid, uid);

    if(!isValid) return client.disconnect();

    console.log(`socket autenticó cliente`);
    connectionUser(uid, true);

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
        // ? el controlador connectionUser si es llamado sin pasar true como segundo argumento tiene por defecto la desconexión
        connectionUser(uid);
    });

    // client.on('mensaje', ( payload ) => {
    //     console.log('Mensaje', payload);

    //     io.emit( 'mensaje', { admin: 'Nuevo mensaje' } );

    // });


});


