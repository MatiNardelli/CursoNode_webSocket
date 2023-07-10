require('dotenv').config(); //le decimos que corra en el puerto definido en el env

const Server = require('./models/server');

const server = new Server();

server.listen();