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
require('./routes/promocoes')(app)


app.use(function(request, response, next){
    console.log("Página não encontrada: " + request.url)
    next()
});

app.use(function(request, response){
    response
        .status(404)
        .format({
            html: () =>  response.render('erros/404')
            ,json: () => response.send({message: "Não encontrado"})
            ,'application/xml': () => response.send(libXML("Não encontrado"))
        })
})

app.use(function(erro, request, response, next){
    response
        .status(500)
        .format({
            html: () =>  response.render('erros/500', { erro })
        ,json: () => response.send({message: "Não encontrado"})
        ,'application/xml': () => response.send(libXML(erro))
        })

    if(process.env.NODE_ENV === 'development') {
        console.error(erro.message)
        console.error(erro.stack)
    }
});

module.exports = app;