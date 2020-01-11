const ProdutoDAO = require('../repository/produtoDAO')
class ProdutoController {

    listar(request,response, next){
        const produtoDAO = new ProdutoDAO();
        const callback = function(erro, resultados){
            if(erro) {
                next(erro)
            }
    
            response.render('produtos/lista',{listaLivros:resultados})
        }
        produtoDAO.listar(callback)
    }

    cadastro(request,response){
        response.render('produtos/cadastro')
    }

    montaBody(request, response, next) {
        const queryString = require('query-string')
    
        let body = ""
        request.on('data', function(chunk) {
            body += chunk.toString()
        })
    
        request.on('end', function() {
            if (request.get('Content-Type') === 'application/x-www-form-urlencoded'){
                request.body = queryString.parse(body)
            } else if(request.get('Content-Type') === 'application/json') {
                request.body = JSON.parse(body)
            }
            next()
        })
    }

    salvar(request, response, next){
        const livro = request.body;

        const produtoDAO = new ProdutoDAO();
        
        const callback = function(erro, resultados){
            if (erro !== null) {
                next(erro)
            } else {
                response.redirect('/produtos')
            }
        }

        produtoDAO.cadastrar(livro, callback)
    }

}

module.exports = ProdutoController