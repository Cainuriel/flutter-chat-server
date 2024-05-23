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

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    // client.on('mensaje', ( payload ) => {
    //     console.log('Mensaje', payload);

    //     io.emit( 'mensaje', { admin: 'Nuevo mensaje' } );

    // });


});


