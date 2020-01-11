const http = require('http')
const socketio = require('socket.io')

require('dotenv').config();
const port = process.env.SERVER_PORT;

const app = require('./custom-express')

const servidor = http.createServer(app)

const io = socketio(servidor)
app.set('io', io)

// subir o a instacia(cópia preenchida) do servidor com express
servidor.listen(port, function(){    
    console.log('O servidor subiu na porta ' + port)
})