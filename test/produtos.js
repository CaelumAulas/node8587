const http = require('http')

const app = require('../src/custom-express')

const supertest = require('supertest')
const request = supertest(app)

// Mocha
describe('Controller produtos', function (){

    it('volta 302 caso json válido', function(done) {
        const opcoes = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            }
        }

        const request = http.request(
            'http://localhost:3000/produtos/salvar', 
            opcoes,
            function(response) {
                if (response.statusCode !== 302) {
                    done("Status: " +  response.statusCode)
                } else {
                    done()
                }
            }
        )

        request.write(JSON.stringify({
            titulo: "Teste Mocha",
            preco: 25,
            descricao: "wsedrfkl"
        }))

        request.end()

    })

    it('volta 500 caso request sem Content-Type', function(done) {
        request
            .post('/produtos/salvar')
            .send({
                titulo: "Teste Mocha Errado",
                preco: 25,
                descricao: "wsedrfkl"
            })
            .expect(500, done)
    })
   
})
