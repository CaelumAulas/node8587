const path = require('path')

require('dotenv').config({
    path: path.resolve(process.cwd(), '.env.test')
})

const app = require('../../src/custom-express')
const servidorTeste = require('supertest')(app)

describe("routes/produtos", function() {

    it.skip('Teste', () => {
        throw "Erro"
    })

    it('deveria voltar JSON caso pedido JSON', function(done) {
        servidorTeste.get('/produtos')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8', done)
    })

})