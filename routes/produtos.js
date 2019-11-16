module.exports = function (app) {
  app.get('/produtos', function (request, response) {

      const mysql = require('mysql');
      const conexao = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "casadocodigo_8587"
      });

      conexao.query("select * from livros",function(erro, resultados){
        console.log(erro);
        response.render('produtos/lista', {livros: resultados})

      });

      conexao.end();

  })
}