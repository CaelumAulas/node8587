require('dotenv').config()

const http = require('http')

const port = 3000;
const app = require('./custom-express');


const servidor = http.createServer(app)

const socketio = require('socket.io')
const sockets = socketio(servidor)

app.set('sockets', sockets)

servidor.listen(port, function () {
    console.log(`Servidor subindo em http://localhost:${port}`);
})