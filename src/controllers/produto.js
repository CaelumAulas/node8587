const ProdutoDAO = require('../repository/produtoDAO')

const { validationResult } = require("express-validator");


class ProdutoController {
   listar(request, response, next) {
    const produtoDAO = new ProdutoDAO();

    produtoDAO.listar(function(erro, resultados) {
      if (erro) {
        next(erro)
        return
      } 

      response.format({
        "text/html": () => response.render("produtos/lista", { listaLivros: resultados }),
        "application/json": () => response.send(resultados)
      })
    
    });
  }

  cadastro(request, response) {
    response.render("produtos/cadastro", { validationErrors: null });
  }

  salvar(request, response, next) {

    const validationErrors = validationResult(request);

    if(validationErrors.errors.length > 0){
      response.render("produtos/cadastro", { validationErrors: validationErrors.errors.map(erro => erro.msg) });
    }
    else {
      const livro = request.body;
      const produtoDAO = new ProdutoDAO();
  
      produtoDAO.cadastrar(livro, function(erro, resultados) {
        if(erro){
          next(erro)
        } else {
          response.redirect("/produtos");
        }
        response.redirect("/produtos");
      });
    }

  }
}

module.exports = ProdutoController;