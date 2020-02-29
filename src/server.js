require('dotenv').config()

const port = 3000;
const app = require('./custom-express');

app.listen(port, function () {
    console.log(`Servidor subindo em http://localhost:${port}`);
})