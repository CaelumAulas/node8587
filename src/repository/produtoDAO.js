class ProdutoDAO {

  constructor() {
    this.conexao = require("../repository/connectionFactory")();
  }

    listar(funcaoDoController){
      this.conexao.query("select * from livros", funcaoDoController);

      this.conexao.end();
      
    }

    cadastrar(livro, funcaoDoController){
      this.conexao.query(
          "INSERT INTO livros SET ?",
          livro,
          funcaoDoController
      )

      this.conexao.end();

    }
}

module.exports = ProdutoDAO;