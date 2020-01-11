const bodyParser = require('body-parser')

module.exports = function(app){
    const ProdutoController = require("../controllers/produtos")
    const produtoController = new ProdutoController();

    //endpoint - saida de info!!!
    app.get("/produtos", produtoController.listar)

    app.get("/produtos/cadastro", produtoController.cadastro)

    // app.post("/produtos/salvar", produtoController.montaBody)
    app.post("/produtos/salvar", bodyParser.urlencoded({ extended: false }))
    app.post("/produtos/salvar", bodyParser.json({ extended: false }))
    
    app.post("/produtos/salvar", produtoController.salvar)
}