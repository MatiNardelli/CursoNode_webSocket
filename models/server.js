const express = require('express');
const cors = require('cors');
const socketControllers = require('../sockets(controllers)/controller');

class Server {

    constructor() {
        this.app  = express(); //inicializa express es lo mismo que -> const app = require('express')();
        this.port = process.env.PORT || 3000;
        this.server = require('http').createServer(this.app); //cambio el const por this para manejarlo como propiedad de mi clase
        this.io = require('socket.io')(this.server); //con "io" puedo enviar mensaje a todos los clientes conectados a nuestro backend

        this.paths = {}

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        //Sockets -> manejo de eventos sockets
        this.sockets();
    }

    async conectarDB() {
        await dbConnection();
    }


    middlewares() {

        // CORS
        this.app.use( cors() ); //lo dejo por si otras app necesitar hacer peticiones a nuestras app

        // Directorio Público
        this.app.use( express.static('public') );
 

    }

    routes() {
        
       //this.app.use( this.paths.auth, require('../routes/auth'));
       
    }

    sockets(){
        this.io.on("connection", socketControllers);
    }

    listen() {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;