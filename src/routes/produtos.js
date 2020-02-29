const { check, validationResult } = require("express-validator");

module.exports = function (app) {
  
  const ProdutoController = require("../controllers/produto");
  const produtoController = new ProdutoController();
  
  //endpoint
  app.get('/produtos', produtoController.listar)
  
  app.get("/produtos/cadastro", produtoController.cadastro);

  app.post(
      "/produtos/salvar", 
      [
        check('titulo','titulo nao pode estar vazio').not().isEmpty(), 
        check('preco', 'Preço numero').isNumeric()
      ],
      function(request, response){
        const validationErrors = validationResult(request);
        produtoController.salvar(request, response, validationErrors);
      }
  );

  app.post('/prod/salvar', produtoController.salvar)
  
}