const ProdutoDAO = require('../repository/produtoDAO')

class ProdutoController {

    listar(request, response, next){

      const produtoDAO = new ProdutoDAO();

      const callback = function(erro, resultados) {
        
        if(erro){
          next(erro)
        }
        
        response.render("produtos/lista", { listaLivros: resultados });
      };

      produtoDAO.listar(callback);

    }

    cadastrar(){}
}

module.exports = ProdutoController;