const consign = require('consign');
const express = require('express');

const app = express();

app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.use("/static", express.static('node_modules/bootstrap/dist')); // static é um apelido pra linha
app.use("/assets", express.static('src/assets/'));

// consign()
//  .include('src/routes')
//  .into(app)

// Código por debaixo do consign
require('./routes/index')(app)
require('./routes/produtos')(app)


app.use(function(request, response, next){
    console.log("Página não encontrada: " + request.url())
    next()
});

app.use(function(request, response){
    response.status(404).render('erros/404')
})

app.use(function(erro, request, response, next){
    response.status(500).render('erros/500', { erro })

    if(process.env.NODE_ENV === 'development') {
        console.error(erro.message)
        console.error(erro.stack)
    }
});

module.exports = app;