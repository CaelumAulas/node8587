const express = require('express');
const app = express();
const consign = require("consign");
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use('/static', express.static('node_modules/bootstrap/dist'));
app.use('/assets', express.static('src/assets/'));
app.use(bodyParser.urlencoded({ extended: true }));


// app.get('/', function (request, response) {
//   response.render('index');
// });

//require('./routes/produtos')(app);

consign()
.include('src/routes')
.into(app)

//middleware de not found (caso nenhuma das rotas sejam carregadas)
app.use(function(request,response, next){
  response.status(404).render("erros/404");
})

//middleware de erros
app.use(function(erro,request, response, next){
  response.status(500).render("erros/500", { erro });
});

module.exports = app;