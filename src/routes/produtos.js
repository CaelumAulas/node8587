module.exports = function (app) {

  const ProdutoController = require("../controllers/produto");
  const produtoController = new ProdutoController();

  //endpoint
  app.get('/produtos', produtoController.listar)
  
}