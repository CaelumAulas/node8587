const ProdutoDAO = require('../repository/produtoDAO')

class ProdutoController {
  listar(request, response, next) {
    const produtoDAO = new ProdutoDAO();
    const callback = function(erro, resultados) {
      if (erro) {
        next(erro);
      }

      response.render("produtos/lista", { listaLivros: resultados });
    };

    produtoDAO.listar(callback);
  }

  cadastro(request, response) {
    response.render("produtos/cadastro", { validationErrors: null });
  }

  salvar(request, response, validationErrors) {
    
    console.log(validationErrors);

    if(validationErrors){
      response.render("produtos/cadastro", { validationErrors });
    }

    else {
      
      const livro = request.body;
      const produtoDAO = new ProdutoDAO();
  
      produtoDAO.cadastrar(livro, function(erro, resultados) {
        console.log(erro);
        response.redirect("/produtos");
      });

    }

  }
}

module.exports = ProdutoController;