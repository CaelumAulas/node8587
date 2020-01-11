require('dotenv').config();
const port = process.env.SERVER_PORT;

const app = require('./custom-express')

// subir o a instacia(cópia preenchida) do servidor com express
app.listen(port, function(){    
    console.log('O servidor subiu na porta ' + port)
})