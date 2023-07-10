const socketControllers = (socket) => {
    //console.log('Cliente conectado',socket.id);
    console.log('Cliente conectado', socket.id);


    socket.on('disconnect', ()=>{
        //console.log('Cliente desconectado',socket.id);
    });
    //escuchamos cuando el cliente emite un msg y largamos un callback
    //payload me permite ver en consola que mensaje estoy enviando desde el front sino con console.log solo veo algo predefinido
    //socket.on escucho al cliente y this.io.emit le envio un mensaje al cliente
    //el callback es la referencia del callback en socket-client desde (id) hasta terminar
    socket.on('enviar-mensaje', (payload,callback)=>{
        
        const id = 123456;
        callback(id);
        
        //this.io.emit('enviar-mensaje',payload); //el "this.io" va a dar error porque no tengo acceso desde controllers...en vez uso socket.emit que si tengo acceso
        socket.broadcast.emit('enviar-mensaje',payload);
    });
}


module.exports = socketControllers;