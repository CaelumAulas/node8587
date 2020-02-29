const ProdutoDAO = require('../repository/produtoDAO')

class ProdutoController {
  listar(request, response, next) {
    const produtoDAO = new ProdutoDAO();

    produtoDAO.listar(function(erro, resultados) {
      if (erro) {
        next(erro);
      }

      response.render("produtos/lista", { listaLivros: resultados });
    });
  }

  cadastro(request, response) {
    response.render("produtos/cadastro", { validationErrors: null });
  }

  salvar(request, response, validationErrors) {
    
    console.log(validationErrors);

    if(validationErrors.errors.length > 0){
      response.render("produtos/cadastro", { validationErrors: validationErrors.errors.map(erro => erro.msg) });
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