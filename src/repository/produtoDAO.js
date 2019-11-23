class ProdutoDAO {

    listar(funcaoDoController){
         
      const conexao = require("../repository/connectionFactory")();

      conexao.query("select * from livros", funcaoDoController);

      conexao.end();
      
    }
}

module.exports = ProdutoDAO;