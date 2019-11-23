class ProdutoDAO {

    listar(funcaoDoController){
         
      const conexao = require("../repository/connectionFactory")();

      conexao.query("select * from livros", funcaoDoController);

      conexao.end();
      
    }

    cadastrar(livro, funcaoDoController){

      const conexao = require("../repository/connectionFactory")();

      conexao.query(
          "INSERT INTO livros SET ?",
          livro,
          funcaoDoController
      )

      conexao.end();

    }
}

module.exports = ProdutoDAO;