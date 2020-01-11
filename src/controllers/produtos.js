const ProdutoDAO = require('../repository/produtoDAO')
const expressValidator = require('express-validator')
class ProdutoController {

    listar(request,response, next){ // essa função é a controller

        const produtoDAO = new ProdutoDAO();
        const callback = function(erro, resultados){
            if(erro) {
                next(erro)
            }

            // MIME Type
            // if (request.get('Accept') === 'text/html'){
            //     response.render('produtos/lista',{listaLivros:resultados}) // isso renderiza numa tela
            // } else if(request.get('Accept') === 'application/json') {
            //     response.send(resultados)
            // } else {
            //     next(new Error("Formato não suportado"))
            // }

            response.format({
                 html: () =>  response.render('produtos/lista',{listaLivros:resultados}) // isso renderiza numa tela
                ,json: () => response.send(resultados)
                ,'application/xml': () => response.send(libXML(resultados))
            })
        }
        produtoDAO.listar(callback)

    }

    cadastro(request,response){
        response.render('produtos/cadastro', {erros: []})
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

    valida(request, response , next) {
        expressValidator.check('preco', 'Preço inválido').isNumeric()(request, response , next), 
        expressValidator.check('titulo', 'Título é obrigatório').notEmpty()(request, response , next)
    }

    salvar(request, response, next){
        const livro = request.body;

        const listaErros = expressValidator.validationResult(request).array()

        const tudoCerto =  listaErros.length === 0

        if(!tudoCerto) {
            response.status(400).render('produtos/cadastro', {erros: listaErros})
        } else {
            const produtoDAO = new ProdutoDAO();
           
            const callback = function(erro, resultados){
                if (erro !== null) {
                    next(erro)
                } else {
                    response.redirect('/produtos') // isso envia um json -> api
                }
            }

            produtoDAO.cadastrar(livro, callback)
        }
    }

}

module.exports = ProdutoController