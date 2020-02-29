const express = require('express');
const app = express();
const cors = require("cors");

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(cors())

app.use('/static', express.static('node_modules/bootstrap/dist'));
app.use('/assets', express.static('src/assets/'));

require('./routes/index')(app);
require('./routes/produtos')(app);

//middleware de not found (caso nenhuma das rotas sejam carregadas)
app.use(function(request,response, next){
  response.status(404).render("erros/404");
})

//middleware de erros
app.use(function(erro,request, response, next){
  response.status(500).render("erros/500", { erro });
});

module.exports = app;