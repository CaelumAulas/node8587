const { check } = require("express-validator");
const queryString = require('query-string')

const bodyParser = require("body-parser");
module.exports = function (app) {
  
  const ProdutoController = require("../controllers/produto");
  const produtoController = new ProdutoController();
  
  //endpoint
  app.get('/produtos', produtoController.listar)
  
  app.get("/produtos/cadastro", produtoController.cadastro);

  app.post(
      "/produtos/salvar", 
      [
        bodyParser.urlencoded(),
        bodyParser.json(),
        check('titulo','titulo nao pode estar vazio').not().isEmpty(), 
        check('preco', 'Preço numero').isNumeric()
      ],
      produtoController.salvar
  );

  // app.post('/produtos/salvar', function (request, response, next) {
  //   let bodyString = ""
  //   request.on('data', function(chunk) {
  //     bodyString += chunk.toString()
  //   })

  //   request.on('end', function() {
      
  //     request.body = queryString.parse(bodyString)
  //     next()
  //   })
  // })

}